#!/usr/bin/env python3
"""
Setup script: copies WordPress mirror assets to public/ and processes HTML files to wp-pages/
"""
import os
import re
import shutil

MIRROR_ROOT = '/tmp/mirrors/hostao.com'
PROJECT_ROOT = '/Users/rejimodiyil/.openclaw/workspace/hostao-web'
PUBLIC_ROOT = os.path.join(PROJECT_ROOT, 'public')
WP_PAGES_ROOT = os.path.join(PROJECT_ROOT, 'wp-pages')

def clean_filename(fname):
    """Remove query string from filename. e.g. main.min.css?ver=4.12.6.css -> main.min.css"""
    if '?' in fname:
        # The mirror appends .css/.js to the query string, so strip from ? onwards
        # But also check if the base already has the right extension
        base = fname.split('?')[0]
        return base
    return fname

def copy_assets():
    """Copy wp-content and wp-includes to public/, cleaning filenames."""
    print("Copying assets to public/...")
    for src_dir_name in ['wp-content', 'wp-includes']:
        src_dir = os.path.join(MIRROR_ROOT, src_dir_name)
        if not os.path.exists(src_dir):
            print(f"  Skipping {src_dir_name} (not found)")
            continue

        copied = 0
        skipped = 0
        for root, dirs, files in os.walk(src_dir):
            # Skip certain large/irrelevant dirs
            dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules']]

            for fname in files:
                src_path = os.path.join(root, fname)
                clean_name = clean_filename(fname)

                rel_dir = os.path.relpath(root, MIRROR_ROOT)
                dst_dir = os.path.join(PUBLIC_ROOT, rel_dir)
                os.makedirs(dst_dir, exist_ok=True)

                dst_path = os.path.join(dst_dir, clean_name)
                if not os.path.exists(dst_path):
                    shutil.copy2(src_path, dst_path)
                    copied += 1
                else:
                    skipped += 1

        print(f"  {src_dir_name}: {copied} copied, {skipped} skipped")

def rewrite_urls(html):
    """Rewrite all https://hostao.com/ URLs to local paths, stripping query strings from asset URLs."""

    # Rewrite CSS/JS asset URLs: strip query string
    # e.g. https://hostao.com/wp-content/FILE?ver=X -> /wp-content/FILE
    def rewrite_asset(m):
        full_url = m.group(0)
        path = m.group(1)
        # Strip query string from path
        clean_path = path.split('?')[0]
        return '/' + clean_path

    # Match wp-content and wp-includes asset URLs
    html = re.sub(
        r'https://hostao\.com/(wp-(?:content|includes)/[^\s\'"<>]+)',
        rewrite_asset,
        html
    )

    # Rewrite remaining hostao.com URLs (navigation links, etc.)
    html = html.replace('https://hostao.com/', '/')
    html = html.replace('https://www.hostao.com/', '/')

    return html

def process_html_files():
    """Find all HTML files in mirror, rewrite URLs, save to wp-pages/."""
    print("Processing HTML files to wp-pages/...")

    os.makedirs(WP_PAGES_ROOT, exist_ok=True)

    # Find all HTML files, excluding wp-content and wp-includes directories
    html_files = []
    for root, dirs, files in os.walk(MIRROR_ROOT):
        # Skip wp-content, wp-includes, feed directories
        dirs[:] = [d for d in dirs if d not in ['wp-content', 'wp-includes', '.git', 'node_modules', 'feed']]

        for fname in files:
            if fname.endswith('.html') and '?' not in fname:
                src_path = os.path.join(root, fname)
                html_files.append(src_path)

    processed = 0
    for src_path in sorted(html_files):
        rel_path = os.path.relpath(src_path, MIRROR_ROOT)
        dst_path = os.path.join(WP_PAGES_ROOT, rel_path)

        dst_dir = os.path.dirname(dst_path)
        os.makedirs(dst_dir, exist_ok=True)

        try:
            with open(src_path, 'r', encoding='utf-8', errors='replace') as f:
                html = f.read()

            html = rewrite_urls(html)

            with open(dst_path, 'w', encoding='utf-8') as f:
                f.write(html)

            processed += 1
        except Exception as e:
            print(f"  ERROR processing {rel_path}: {e}")

    print(f"  Processed {processed} HTML files")

def list_all_pages():
    """List all page paths for generateStaticParams."""
    pages = []
    for root, dirs, files in os.walk(WP_PAGES_ROOT):
        dirs[:] = [d for d in dirs if d not in ['.git']]
        for fname in files:
            if fname.endswith('.html'):
                full_path = os.path.join(root, fname)
                rel = os.path.relpath(full_path, WP_PAGES_ROOT)
                # Normalize to URL path
                url_path = rel.replace('\\', '/')
                # Remove index.html or .html suffix
                if url_path == 'index.html':
                    continue  # homepage handled separately
                elif url_path.endswith('/index.html'):
                    url_path = url_path[:-len('/index.html')]
                elif url_path.endswith('.html'):
                    url_path = url_path[:-len('.html')]
                pages.append(url_path)
    return sorted(pages)

if __name__ == '__main__':
    print(f"Mirror root: {MIRROR_ROOT}")
    print(f"Project root: {PROJECT_ROOT}")
    print()

    copy_assets()
    process_html_files()

    pages = list_all_pages()
    print(f"\nTotal pages found: {len(pages)}")
    for p in pages[:10]:
        print(f"  /{p}")
    if len(pages) > 10:
        print(f"  ... and {len(pages) - 10} more")

    print("\nDone! Assets copied and HTML files processed.")
