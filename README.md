# Personal Site

My personal website — hand-written HTML and CSS, no frameworks, no build step.

## Pages

- **`index.html`** — Home: bio, what I'm working on, and jersey-button navigation (OKC / Raptors / Grizzlies) to the three sections
- **`work.html`** — Current work (Kick Clipper, Instagram) and past work (Clip Studio, Tiger Masters)
- **`projects.html`** — Side projects with links to their GitHub repos
- **`writing.html`** — Essays, starting with [From Pre-Med to Growth and Product Engineering](pre-med-to-growth.html)

## Design

- Serif typography ([Lora](https://fonts.google.com/specimen/Lora)) with [DM Mono](https://fonts.google.com/specimen/DM+Mono) accents
- Light mode by default with a dark-mode toggle (☀︎) on every page
- Hover slide effect on cards and entries
- Each page is fully self-contained — styles live in a `<style>` block per page

## Running locally

No dependencies. Serve the folder with any static server:

```sh
python3 -m http.server 8743
```

Then open [http://localhost:8743](http://localhost:8743).

## Deployment

Deployed on [Vercel](https://vercel.com) — pushes to `main` deploy automatically.

> Note: Vercel's build runs on Linux, so image filename case matters. Reference image files with their exact casing.
