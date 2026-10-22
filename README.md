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

The finance projects and teaching experience are described from Pranav's direct
account: custom indicator-based strategies, Fyers and Kotak SDKs, NSE market data,
WebSockets, historical backtesting, forward paper trading, exchange-data scraping,
Telegram delivery, and basic Python teaching for traders. No trading-return claims
or invented performance results are included.

JOT is featured as collaborative work. Pranav's contributions were checked against
[`Neel-G-png/Jot`](https://github.com/Neel-G-png/Jot) and its author-filtered history:
Gmail OAuth and message retrieval, token refresh and expiry, incremental history
retrieval, HTML extraction, structured email parsing, and setup instructions.
ASL appears only as an earlier exploration. Django is not a featured project.

The repository began as a clone of
[`pnivarthi/pranav.github.fork.io`](https://github.com/pnivarthi/pranav.github.fork.io).
The current design is an original editorial reinterpretation inspired by
[CRED's website](https://cred.club/): monochrome surfaces, large serif typography,
and spacious composition. It does not use CRED branding or copied artwork.
The metal-folio SVG is original code-native artwork. Fonts are Bodoni Moda and
Manrope. The site remains static, with no runtime package dependencies.

See [PORTFOLIO_PLAN.md](PORTFOLIO_PLAN.md) for the updated scope and checks.
