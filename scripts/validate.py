"""Validate static HTML links, anchors, images, SVGs, and the resume PDF."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
errors, pages = [], {}

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.ids, self.links, self.h1 = path, set(), [], 0
    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if 'id' in data:
            if data['id'] in self.ids:
                errors.append(f'{self.path}: duplicate id {data["id"]}')
            self.ids.add(data['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'img' and not data.get('alt'):
            errors.append(f'{self.path}: image missing alt text')
        for attr in ['href', 'src']:
            if data.get(attr): self.links.append(data[attr])

for path in ROOT.rglob('*.html'):
    page, content = Page(path), path.read_text(encoding='utf-8')
    page.feed(content)
    pages[path.resolve()] = page
    for leftover in ['vadipudi1', '1vennela2018', 'Vennela', 'University of South Florida']:
        if leftover in content: errors.append(f'{path}: leftover identity {leftover}')
for path, page in pages.items():
    for link in page.links:
        parsed = urlsplit(link)
        if parsed.scheme or parsed.netloc: continue
        target = (ROOT / parsed.path.lstrip('/') if parsed.path.startswith('/') else path.parent / unquote(parsed.path)) if parsed.path else path
        if target.is_dir(): target = target / 'index.html'
        target = target.resolve()
        if not target.exists(): errors.append(f'{path}: missing target {link}')
        elif parsed.fragment and target in pages and unquote(parsed.fragment) not in pages[target].ids:
            errors.append(f'{path}: missing anchor {link}')
assert pages[(ROOT/'index.html').resolve()].h1 == 1
assert (ROOT/'PranavNivarthi.pdf').read_bytes().startswith(b'%PDF')
for path in ROOT.rglob('*.svg'): ET.parse(path)
if errors: raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} HTML pages; local links, anchors, images, SVGs, and PDF.')
