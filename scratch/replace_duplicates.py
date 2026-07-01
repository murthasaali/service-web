import os
import re
import hashlib
import urllib.request
import urllib.parse
import ssl
import time
import random

ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

def calculate_md5(file_path):
    hash_md5 = hashlib.md5()
    try:
        if not os.path.exists(file_path):
            return None
        with open(file_path, "rb") as f:
            for chunk in iter(lambda: f.read(4096), b""):
                hash_md5.update(chunk)
        return hash_md5.hexdigest()
    except Exception:
        return None

def search_yandex(query):
    print(f"  Searching Yandex for: '{query}'")
    url = "https://yandex.com/images/search?" + urllib.parse.urlencode({"text": query})
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as response:
            html_content = response.read().decode('utf-8', errors='ignore')
        img_urls = re.findall(r'https?://[^"&;]+?\.(?:png|jpg|jpeg|webp)', html_content)
        valid_urls = [u for u in img_urls if "yandex" not in u and "yastatic" not in u]
        return list(dict.fromkeys(valid_urls))
    except Exception as e:
        print(f"  Yandex Search error: {e}")
        return []

def search_duckduckgo(query):
    print(f"  Searching DuckDuckGo for: '{query}'")
    url = "https://html.duckduckgo.com/html/?" + urllib.parse.urlencode({"q": query})
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as response:
            html_content = response.read().decode('utf-8', errors='ignore')
        img_urls = re.findall(r'https?://[^"&;]+?\.(?:png|jpg|jpeg|webp)', html_content)
        valid_urls = [u for u in img_urls if "duckduckgo" not in u and "yastatic" not in u]
        return list(dict.fromkeys(valid_urls))
    except Exception as e:
        print(f"  DuckDuckGo Search error: {e}")
        return []

def download_image(url, dest_path):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ssl_context, timeout=6) as response:
            content_type = response.headers.get('Content-Type', '')
            if 'image' not in content_type and response.headers.get('Content-Length') and int(response.headers.get('Content-Length')) < 1000:
                return False
            data = response.read()
            if len(data) < 1000:
                return False
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            with open(dest_path, 'wb') as f:
                f.write(data)
            return True
    except Exception:
        return False

def scan_all_capabilities():
    services_dir = "src/app/services"
    page_files = []
    
    for root, dirs, files in os.walk(services_dir):
        for file in files:
            if file == "page.tsx":
                rel_path = os.path.relpath(os.path.join(root, file), services_dir)
                parts = rel_path.split(os.sep)
                if len(parts) >= 3:
                    page_files.append(os.path.join(root, file))
                    
    caps_data = []
    
    for page_file in page_files:
        with open(page_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        parent_slug_match = re.search(r'parentSlug:\s*[\'"`](.*?)[\'"`]', content)
        parent_name_match = re.search(r'parentName:\s*[\'"`](.*?)[\'"`]', content)
        if not parent_slug_match:
            continue
        parent_slug = parent_slug_match.group(1)
        parent_name = parent_name_match.group(1) if parent_name_match else parent_slug.replace("-", " ").title()
        
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
            image_match = re.search(r'image:\s*[\'"`](.*?)[\'"`]', item)
            
            if title_match and image_match:
                title = title_match.group(1).strip()
                image_path = image_match.group(1).strip()
                caps_data.append({
                    "page_file": page_file,
                    "parent_name": parent_name,
                    "title": title,
                    "image_path": image_path,
                    "full_path": f"/home/user/Documents/service-web/public{image_path}"
                })
                
    return caps_data

# Additional backup high quality Unsplash vectors in case searches return duplicates
ADDITIONAL_FALLBACKS = [
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80",
    # Additional high quality SVG / illustration patterns
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
]

def main():
    caps = scan_all_capabilities()
    print(f"Scanned {len(caps)} capabilities.")
    
    # Calculate hashes of all existing files
    hash_to_caps = {}
    used_hashes = set()
    
    for cap in caps:
        h = calculate_md5(cap["full_path"])
        if h:
            cap["hash"] = h
            if h not in hash_to_caps:
                hash_to_caps[h] = []
            hash_to_caps[h].append(cap)
            used_hashes.add(h)
        else:
            cap["hash"] = None
            
    # Find duplicate groups
    duplicates_to_replace = []
    for h, group in hash_to_caps.items():
        if len(group) > 1:
            # We keep the first one as is
            print(f"\nGroup for hash {h} (size {len(group)}):")
            print(f"  Keeping: {group[0]['page_file']} -> {group[0]['title']} ({group[0]['image_path']})")
            for dup in group[1:]:
                print(f"  Replacing: {dup['page_file']} -> {dup['title']} ({dup['image_path']})")
                duplicates_to_replace.append(dup)
                
    if not duplicates_to_replace:
        print("\nNo duplicates to replace! All capabilities have unique content.")
        return
        
    print(f"\nFound {len(duplicates_to_replace)} duplicate capability images that need to be replaced.")
    
    temp_img_path = "/home/user/Documents/service-web/scratch/temp_download.jpg"
    
    replaced_count = 0
    
    for dup in duplicates_to_replace:
        print(f"\n---------------------------------------------")
        print(f"Replacing duplicate for: {dup['page_file']} -> '{dup['title']}'")
        
        # Build queries
        queries = [
            f"{dup['parent_name']} {dup['title']} premium SaaS B2B vector illustration white background",
            f"{dup['title']} premium B2B SaaS vector illustration",
            f"{dup['title']} vector illustration"
        ]
        
        success = False
        for query in queries:
            if success:
                break
            urls = search_yandex(query)
            if not urls:
                urls = search_duckduckgo(query)
                
            for url in urls:
                # Try downloading to a temp path first
                if download_image(url, temp_img_path):
                    h = calculate_md5(temp_img_path)
                    if h and h not in used_hashes:
                        # Success! Move temp to final location
                        if os.path.exists(dup["full_path"]):
                            os.remove(dup["full_path"])
                        os.rename(temp_img_path, dup["full_path"])
                        used_hashes.add(h)
                        success = True
                        print(f"  SUCCESS (Search): Downloaded unique image from {url}")
                        print(f"  Saved to {dup['image_path']} (Hash: {h})")
                        break
                    else:
                        print(f"  Skipped (already used content/hash): {url}")
                        if os.path.exists(temp_img_path):
                            os.remove(temp_img_path)
                time.sleep(0.2)
            time.sleep(0.5)
            
        if not success:
            print(f"  Search did not yield unique image for '{dup['title']}'. Trying curated fallbacks...")
            for fallback_url in ADDITIONAL_FALLBACKS:
                if download_image(fallback_url, temp_img_path):
                    h = calculate_md5(temp_img_path)
                    if h and h not in used_hashes:
                        if os.path.exists(dup["full_path"]):
                            os.remove(dup["full_path"])
                        os.rename(temp_img_path, dup["full_path"])
                        used_hashes.add(h)
                        success = True
                        print(f"  SUCCESS (Fallback): Downloaded unique fallback from {fallback_url}")
                        print(f"  Saved to {dup['image_path']} (Hash: {h})")
                        break
                    else:
                        if os.path.exists(temp_img_path):
                            os.remove(temp_img_path)
                            
        if success:
            replaced_count += 1
            # Add a small delay between replacements to avoid rate limits
            time.sleep(1.5)
        else:
            print(f"  ❌ FAILED to find a unique image for '{dup['title']}'")
            
    print(f"\nFinished: Replaced {replaced_count} of {len(duplicates_to_replace)} duplicate images.")

if __name__ == "__main__":
    main()
