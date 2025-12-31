# Pages Selector Component

A pixel-precise recreation of the Figma “Pages Selector” dialog using plain HTML, CSS, and JavaScript. The component mirrors sizing, spacing, border, shadow, and color specs from the provided frame (370×326, 1px #EEEEEE border, dual shadows).

## Preview
Open `index.html` in your browser (or via GitHub Pages) to view the component. The default zoom in Figma was 50%; match browser zoom for pixel checks.

## Features
- “All pages” master checkbox syncs with individual page checkboxes.
- Individual checkbox changes update the master state automatically.
- Done button logs the current selection to the browser console (F12 → Console).

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript (no dependencies)

## Running Locally
1. Clone the repo.
2. Open `index.html` in any modern browser (double-click or `start index.html` on Windows).
3. Open DevTools → Console to see Done-button output.

## Deployment (GitHub Pages)
1. Push `index.html`, `styles.css`, and `script.js` to your GitHub repo.
2. In the repo: Settings → Pages → Source: “Deploy from a branch”; Branch: `main`; Folder: `/root`; Save.
3. Use the provided URL https://zuck2001.github.io/ellty-test-round1/ to share.

## Notes
- Component dimensions: 370px × 326px.
- Border: 1px solid #EEEEEE; radius: 6px.
- Shadows: 0 8px 15px rgba(20,20,20,0.12) and 0 0 4px rgba(20,20,20,0.1).
- Button and checkbox colors match the supplied Figma frame.

## License
MIT
