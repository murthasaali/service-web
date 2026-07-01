import os
import re
from collections import defaultdict

def find_duplicates():
    services_dir = "src/app/services"
    page_files = []
    
    for root, dirs, files in os.walk(services_dir):
        # We should inspect ALL services including mobile-app-development or excluding it?
        # Wait, the user says "in whole key capabilities in all subservices" -> so let's check ALL, but wait,
        # did the previous instruction say "Do NOT modify the Mobile App Development subservice. It has already been completed and should remain exactly as it is."?
        # Yes, but let's check if there are duplicates there or if we should check duplicates across the entire set.
        # Let's inspect all page.tsx files under src/app/services.
        for file in files:
            if file == "page.tsx":
                rel_path = os.path.relpath(os.path.join(root, file), services_dir)
                parts = rel_path.split(os.sep)
                if len(parts) >= 3: # parent/sub/page.tsx
                    page_files.append(os.path.join(root, file))
                    
    image_to_caps = defaultdict(list)
    
    for page_file in page_files:
        with open(page_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        start_idx = content.find("capabilities: [")
        if start_idx == -1:
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
            
            image_match = re.search(r'image:\s*[\'"`](.*?)[\'"`]', item)
            if image_match:
                img_path = image_match.group(1).strip()
                image_to_caps[img_path].append((page_file, title))

    duplicates = {img: caps for img, caps in image_to_caps.items() if len(caps) > 1}
    
    print(f"Total unique images referenced: {len(image_to_caps)}")
    print(f"Total duplicate images: {len(duplicates)}")
    for img, caps in sorted(duplicates.items(), key=lambda x: len(x[1]), reverse=True):
        print(f"\nImage: {img} (used {len(caps)} times)")
        for page_file, title in caps:
            print(f"  - {page_file} -> '{title}'")

if __name__ == "__main__":
    find_duplicates()
