import urllib.request
import urllib.parse
import re
import html
import ssl

def search_yandex(query):
    print(f"Searching Yandex for: {query}")
    url = "https://yandex.com/images/search?" + urllib.parse.urlencode({"text": query})
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }
    
    # Avoid SSL verification issues on local execution
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            html_content = response.read().decode('utf-8', errors='ignore')
            
        # Let's find image links. Yandex embeds image details in JSON or HTML.
        # Often inside elements with data-bem or json parameters like "dups":[{"url":"..."
        # Let's search for "url" or standard image links
        img_urls = re.findall(r'https?://[^"&;]+?\.(?:png|jpg|jpeg|webp)', html_content)
        
        # Let's clean up duplicate and unwanted URLs (like yastatic, yandex, etc.)
        valid_urls = []
        for u in img_urls:
            if "yandex" not in u and "yastatic" not in u:
                valid_urls.append(u)
                
        return list(dict.fromkeys(valid_urls)) # Remove duplicates while preserving order
    except Exception as e:
        print(f"Error during search: {e}")
        return []

if __name__ == "__main__":
    urls = search_yandex("web development vector illustration white background")
    print(f"Found {len(urls)} urls")
    for u in urls[:5]:
        print(u)
