import os
import hashlib
from collections import defaultdict

def calculate_md5(file_path):
    hash_md5 = hashlib.md5()
    try:
        with open(file_path, "rb") as f:
            for chunk in iter(lambda: f.read(4096), b""):
                hash_md5.update(chunk)
        return hash_md5.hexdigest()
    except Exception as e:
        print(f"Error hashing {file_path}: {e}")
        return None

def find_content_duplicates():
    public_services_dir = "/home/user/Documents/service-web/public/services"
    
    hash_to_files = defaultdict(list)
    
    for root, dirs, files in os.walk(public_services_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                full_path = os.path.join(root, file)
                # skip checking if size is too small, though we shouldn't have any
                if os.path.getsize(full_path) < 100:
                    continue
                file_hash = calculate_md5(full_path)
                if file_hash:
                    # Keep relative path to public
                    rel_path = os.path.relpath(full_path, "/home/user/Documents/service-web/public")
                    hash_to_files[file_hash].append((rel_path, os.path.getsize(full_path)))
                    
    duplicates = {hsh: paths for hsh, paths in hash_to_files.items() if len(paths) > 1}
    
    print(f"Total image files scanned: {sum(len(p) for p in hash_to_files.values())}")
    print(f"Total unique file contents: {len(hash_to_files)}")
    print(f"Total duplicate groups: {len(duplicates)}")
    
    # Sort duplicates by number of occurrences
    for hsh, paths in sorted(duplicates.items(), key=lambda x: len(x[1]), reverse=True):
        size = paths[0][1]
        print(f"\nHash: {hsh} (Size: {size} bytes, used {len(paths)} times)")
        for path, _ in paths:
            print(f"  - {path}")

if __name__ == "__main__":
    find_content_duplicates()
