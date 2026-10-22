# Pranav Nivarthi — Portfolio

Generative AI and platform engineering portfolio: <https://pnivarthi.github.io/>.

Static HTML, CSS, JavaScript, and original SVG diagrams; no build dependencies.
GitHub Pages publishes the root of `main`. `.nojekyll` keeps the site buildless.

## Local preview and validation

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173/>. Validate source with:

```powershell
python scripts/validate.py
node --check assets/js/script.js
```

## Content and provenance

Experience and metrics come from Pranav's `one-page` resume at commit `ace2ed8`.
Supporting Markdown notes provide context on routing, retrieval, evaluation,
and governance. Current resume figures take precedence over older versions.
Hypothetical model-routing cost examples are not presented as achieved savings.

ASL and Django project descriptions were checked against their public source.
RACF is identified as a research-reference fork. Employer work is presented as
professional experience, with illustrative diagrams, separately from public code.

Layout and visual design are adapted from
[`pnivarthi/pranav.github.fork.io`](https://github.com/pnivarthi/pranav.github.fork.io),
the portfolio template originally featuring Vennela Adipudi. Typography, design
tokens, section structure, and responsive styling were retained. Identity, copy,
graphics, resume, and project information have been adapted for Pranav.

See [PORTFOLIO_PLAN.md](PORTFOLIO_PLAN.md) for the implementation and verification plan.
