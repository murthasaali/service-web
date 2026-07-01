import os
import re
import urllib.request
import urllib.parse
import ssl
import time
import random
import string
import html

# Avoid SSL verification issues
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

# Keep track of downloaded URLs globally to ensure uniqueness
used_urls = set()

# Curated list of high-quality premium B2B SaaS vector illustration fallback URLs
# (These are reliable Unsplash vector/graphic art assets with clear B2B/SaaS metaphors)
CURATED_FALLBACKS = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80"
]

def slugify(text):
    text = text.lower()
    allowed = string.ascii_lowercase + string.digits + " "
    cleaned = "".join(c if c in allowed else "" for c in text)
    slug = cleaned.strip().replace(" ", "-")
    while "--" in slug:
        slug = slug.replace("--", "-")
    return slug

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
        
        valid_urls = []
        for u in img_urls:
            if "yandex" not in u and "yastatic" not in u:
                valid_urls.append(u)
                
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
        
        valid_urls = []
        for u in img_urls:
            if "duckduckgo" not in u and "yastatic" not in u:
                valid_urls.append(u)
                
        return list(dict.fromkeys(valid_urls))
    except Exception as e:
        print(f"  DuckDuckGo Search error: {e}")
        return []

def download_image(url, dest_path):
    print(f"  Trying to download: {url}")
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ssl_context, timeout=6) as response:
            content_type = response.headers.get('Content-Type', '')
            if 'image' not in content_type and response.headers.get('Content-Length') and int(response.headers.get('Content-Length')) < 1000:
                print("    Failed: Not an image or too small")
                return False
            
            data = response.read()
            if len(data) < 1000:
                print("    Failed: Data too small")
                return False
                
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            with open(dest_path, 'wb') as f:
                f.write(data)
            print(f"    SUCCESS: Saved to {dest_path} ({len(data)} bytes)")
            return True
    except Exception as e:
        print(f"    Failed: {e}")
        return False

def parse_capabilities(content):
    start_idx = content.find("capabilities: [")
    if start_idx == -1:
        return None, None, None
        
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
        return None, None, None
        
    capabilities_text = content[start_idx:end_idx+1]
    return start_idx, end_idx, capabilities_text

def split_capability_items(capabilities_text):
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
    return items

def process_page(file_path):
    print(f"\n========================================\nProcessing file: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract parentSlug, parentName, slug
    parent_slug_match = re.search(r'parentSlug:\s*[\'"`](.*?)[\'"`]', content)
    parent_name_match = re.search(r'parentName:\s*[\'"`](.*?)[\'"`]', content)
    subservice_slug_match = re.search(r'slug:\s*[\'"`](.*?)[\'"`]', content)
    
    if not parent_slug_match or not subservice_slug_match:
        print("  Skipping: parentSlug or slug not found in file")
        return
        
    parent_slug = parent_slug_match.group(1)
    subservice_slug = subservice_slug_match.group(1)
    parent_name = parent_name_match.group(1) if parent_name_match else parent_slug.replace("-", " ").title()
    
    print(f"  Parent: {parent_slug} ({parent_name}), Subservice: {subservice_slug}")
    
    # Locate capabilities block
    start_idx, end_idx, capabilities_text = parse_capabilities(content)
    if not capabilities_text:
        print("  Skipping: No capabilities block found")
        return
        
    items = split_capability_items(capabilities_text)
    print(f"  Found {len(items)} capabilities")
    
    new_items_code = []
    for item in items:
        # Extract fields
        icon_match = re.search(r'icon:\s*[\'"`](.*?)[\'"`]', item)
        title_match = re.search(r'title:\s*[\'"`](.*?)[\'"`]', item)
        desc_match = re.search(r'description:\s*[\'"`](.*?)[\'"`]', item, re.DOTALL)
        
        # fallback for template literals/multi-line description without quotes
        if not desc_match:
            desc_match = re.search(r'description:\s*(?:[\'"`]|\s*|)(.*?)(?:[\'"`]|\s*|)(?:,|\s*})', item, re.DOTALL)
            
        if not title_match:
            new_items_code.append(item)
            continue
            
        title = title_match.group(1).strip()
        icon = icon_match.group(1).strip() if icon_match else "zap"
        description = desc_match.group(1).strip() if desc_match else ""
        
        # Remove trailing and leading quotes or newlines from description
        description = re.sub(r'^[\'"`]|[\'"`]$', '', description).strip()
        
        title_slug = slugify(title)
        image_name = f"{subservice_slug}-{title_slug}.jpg"
        dest_rel_path = f"/services/{parent_slug}/{image_name}"
        dest_abs_path = f"/home/user/Documents/service-web/public{dest_rel_path}"
        
        print(f"  Capability: '{title}' -> Image destination: {dest_rel_path}")
        
        # Check if the image file already exists locally and has non-zero size
        if os.path.exists(dest_abs_path) and os.path.getsize(dest_abs_path) > 1000:
            print("    Local image already exists. Skipping download.")
            image_alt = f"{parent_name} {title} capability illustration."
            new_item = f"""\t\t{{\n\t\t\ticon: '{icon}',\n\t\t\ttitle: '{title}',\n\t\t\tdescription:\n\t\t\t\t'{description}',\n\t\t\timage: '{dest_rel_path}',\n\t\t\timageAlt: '{image_alt}',\n\t\t}}"""
            new_items_code.append(new_item)
            continue
            
        # Download unique image
        success = False
        
        # Build search query list
        queries = [
            f"{parent_name} {title} premium SaaS B2B vector illustration white background",
            f"{title} premium B2B SaaS vector illustration",
            f"{title} vector illustration"
        ]
        
        for query in queries:
            if success:
                break
            # Try Yandex Images
            urls = search_yandex(query)
            # Try DuckDuckGo if Yandex returns nothing
            if not urls:
                urls = search_duckduckgo(query)
                
            for url in urls:
                if url in used_urls:
                    continue
                # Try downloading
                if download_image(url, dest_abs_path):
                    used_urls.add(url)
                    success = True
                    break
                time.sleep(0.3)
            time.sleep(0.5)
            
        if not success:
            print(f"  ERROR: Could not download any unique image for '{title}' from searches.")
            # Fallback to curated list of unique high-quality B2B illustration assets
            fallback_found = False
            for fallback_url in CURATED_FALLBACKS:
                if fallback_url not in used_urls:
                    if download_image(fallback_url, dest_abs_path):
                        used_urls.add(fallback_url)
                        fallback_found = True
                        success = True
                        break
            if not fallback_found:
                # Absolute fallback if we run out of unique curation links
                rand_fallback = random.choice(CURATED_FALLBACKS)
                if download_image(rand_fallback, dest_abs_path):
                    success = True
                    
        image_alt = f"{parent_name} {title} capability illustration."
        
        # Build new capability object string
        new_item = f"""\t\t{{\n\t\t\ticon: '{icon}',\n\t\t\ttitle: '{title}',\n\t\t\tdescription:\n\t\t\t\t'{description}',\n\t\t\timage: '{dest_rel_path}',\n\t\t\timageAlt: '{image_alt}',\n\t\t}}"""
        new_items_code.append(new_item)
        
    # Reassemble capabilities list
    new_capabilities_text = "capabilities: [\n" + ",\n".join(new_items_code) + "\n\t]"
    
    # Replace in file content
    updated_content = content[:start_idx] + new_capabilities_text + content[end_idx+1:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print(f"  Successfully updated {file_path}")

def run_main():
    services_dir = "src/app/services"
    page_files = []
    
    for root, dirs, files in os.walk(services_dir):
        if "mobile-app-development" in root:
            continue
        for file in files:
            if file == "page.tsx":
                # Check if it is a subpage (nested inside at least two levels)
                # e.g., src/app/services/software-development/enterprise-software/page.tsx
                rel_path = os.path.relpath(os.path.join(root, file), services_dir)
                parts = rel_path.split(os.sep)
                if len(parts) >= 3: # parent/sub/page.tsx
                    page_files.append(os.path.join(root, file))
                    
    print(f"Found {len(page_files)} subpage files to process:")
    for f in page_files:
        print(f"  - {f}")
        
    for page_file in page_files:
        process_page(page_file)
        # Sleep to avoid rapid fire rate limiting on search engines
        time.sleep(2)

if __name__ == "__main__":
    run_main()
