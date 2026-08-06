# Marko Jevtic — Hardware Design Portfolio

A dark, responsive GitHub Pages portfolio for **Marko Jevtic**, a fourth-year Computer Engineering student focused on hardware design and personal engineering projects.

## Current design

- Dark navy interface with restrained blue accents
- Responsive desktop, tablet, and mobile layouts
- Hero text set to “Marko Jevtic,” “4th Computer Engineering Student,” and “Hardware Design Personal Project Portfolio”
- Marko’s supplied professional portrait on the front page
- Four vertically scrollable hardware-project case studies
- Four 16:9 image slots and one 16:9 video slot per project
- RP2350A Development Board video in the first project
- Supplied placeholder image and video in unfinished media slots
- GitHub link for every project
- Accessible navigation, keyboard focus, reduced-motion support, and mobile galleries

## Project status

The first project is named **RP2350A Development Board** and includes the supplied board video. Every project description currently reads **WIP**.

The remaining projects are titled **RP2354A Minima Board Family**, **HDMI to CSI Adapter**, and **Linux Mini PC**. All titles and content can still be changed in `portfolio-data.js`.

## Replace these placeholders next

Open `portfolio-data.js` and update:

1. `email`
2. `github`
3. LinkedIn URL
4. Repository links
5. Project titles and technology labels as the projects develop
6. Any optional live project URLs

## Media files

```text
assets/images/marko-jevtic-profile.webp
assets/images/project-placeholder.webp
assets/images/rp2350a-video-poster.jpg
assets/images/rp2354a-minima-02.webp
assets/images/rp2354a-minima-03.webp
assets/images/hdmi-csi-adapter-02.webp
assets/images/hdmi-csi-adapter-03.webp
assets/videos/rp2350a-development-board.mp4
assets/videos/project-placeholder.mp4
```

The portrait preserves the supplied photo’s native portrait ratio. Project images, posters, and videos use a mobile-friendly **16:9** gallery ratio.

To add real project images, replace any repeated `project-placeholder.webp` paths in `portfolio-data.js` with your own JPG, PNG, WebP, or SVG files.

## Preview locally

From the portfolio folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a repository named `YOUR-GITHUB-USERNAME.github.io`.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, then choose `main` and `/ (root)`.
5. Save.

The default address will be:

```text
https://YOUR-GITHUB-USERNAME.github.io
```

## Use a custom domain

In **Settings → Pages → Custom domain**, enter the domain you own and apply the DNS records GitHub provides.

`CNAME.example` is included as a reference. Rename it to `CNAME` only when your deployment setup requires it.

## File map

```text
portfolio-site/
├── index.html
├── styles.css
├── script.js
├── portfolio-data.js
├── .nojekyll
├── CNAME.example
└── assets/
    ├── images/
    └── videos/
```
