import os
import re

def verify():
    services_dir = "src/app/services"
    page_files = []
    
    for root, dirs, files in os.walk(services_dir):
        if "mobile-app-development" in root:
            continue
        for file in files:
            if file == "page.tsx":
                rel_path = os.path.relpath(os.path.join(root, file), services_dir)
                parts = rel_path.split(os.sep)
                if len(parts) >= 3: # parent/sub/page.tsx
                    page_files.append(os.path.join(root, file))
                    
    print(f"Verifying {len(page_files)} subpages...")
    
    missing_capabilities = 0
    missing_image_fields = 0
    missing_image_files = 0
    empty_image_files = 0
    total_capabilities = 0
    
    for page_file in page_files:
        with open(page_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        start_idx = content.find("capabilities: [")
        if start_idx == -1:
            print(f"❌ {page_file}: No capabilities: [ found")
            missing_capabilities += 1
            continue
            
        bracket_count = 1
        end_idx = -1
        for i in range(start_idx + len("capabilities: ["), len(content)):
            if content[i] == '[':
                bracket_count += 1
            elif content[i] == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    end_idx = i
                    break
                    
        if end_idx == -1:
            print(f"❌ {page_file}: Capabilities block parsing failed")
            missing_capabilities += 1
            continue
            
        capabilities_text = content[start_idx:end_idx+1]
        
        # Split items
        inner_text = capabilities_text[len("capabilities: ["): -1]
        items = []
        brace_count = 0
        start_item = -1
        for i, char in enumerate(inner_text):
            if char == '{':
                if brace_count == 0:
                    start_item = i
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0 and start_item != -1:
                    items.append(inner_text[start_item:i+1])
                    start_item = -1
                    
        for item in items:
            title_match = re.search(r'title:\s*[\'"`](.*?)[\'"`]', item)
            if not title_match:
                continue
            title = title_match.group(1).strip()
            total_capabilities += 1
            
            image_match = re.search(r'image:\s*[\'"`](.*?)[\'"`]', item)
            image_alt_match = re.search(r'imageAlt:\s*[\'"`](.*?)[\'"`]', item)
            
            if not image_match or not image_alt_match:
                print(f"❌ {page_file} -> '{title}': Missing image or imageAlt fields")
                missing_image_fields += 1
                continue
                
            img_path = image_match.group(1).strip()
            # check local file
            full_img_path = f"/home/user/Documents/service-web/public{img_path}"
            if not os.path.exists(full_img_path):
                print(f"❌ {page_file} -> '{title}': Image file does not exist at {img_path}")
                missing_image_files += 1
            else:
                sz = os.path.getsize(full_img_path)
                if sz < 1000:
                    print(f"⚠️ {page_file} -> '{title}': Image file is too small ({sz} bytes) at {img_path}")
                    empty_image_files += 1

    print("\n--- Summary ---")
    print(f"Total checked capabilities: {total_capabilities}")
    print(f"Pages with missing capabilities block: {missing_capabilities}")
    print(f"Capabilities missing image/imageAlt fields: {missing_image_fields}")
    print(f"Capabilities with missing image files on disk: {missing_image_files}")
    print(f"Capabilities with small/empty image files: {empty_image_files}")

if __name__ == "__main__":
    verify()
