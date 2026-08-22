# PlayStation Website — Figma Replica

This folder contains the complete PlayStation website built strictly according to your Figma specs, measurements, gradients, shadows, and layout.

## 📁 Project Structure
- `index.html` — The semantic HTML structure for Navbar, Hero with Floating Games stack, Promo section, Store cards, and Footer.
- `styles.css` — Exact CSS pixel measurements, gradients, shadows, and responsive scaling.
- `script.js` — Interactive cart, notifications, and card hover effects.
- `images/` — Drop your game cover images here.

## 🎮 Exact Figma Measurements Applied
### Hero Floating Games Stack
- **Container**: `position: absolute; width: 1224px; height: 812px; left: 0px; top: -334px;`
- **Madden**: `width: 341px; height: 438px; left: 883px; top: 0px; border-radius: 18px;`
- **WWE 2K17**: `width: 358px; height: 454px; left: 724px; top: 54px; border-radius: 18px;`
- **Spider-Man**: `width: 364px; height: 460px; left: 555px; top: 113px; border-radius: 18px;`
- **Detroit**: `width: 368px; height: 477px; left: 334px; top: 185px; border-radius: 18px; box-shadow: 10px 17px 21.9px rgba(0, 0, 0, 0.49);`
- **DOA5**: `width: 374px; height: 473px; left: 169px; top: 260px; border-radius: 18px;`
- **God of War**: `width: 378px; height: 478px; left: 0px; top: 334px; border-radius: 18px; filter: drop-shadow(8px 13px 27px rgba(0, 0, 0, 0.48));`

## 🖼️ How to Add Your Images
Whenever you're ready to provide images, simply:
1. Place them in the `images/` folder (e.g. `maden.png`, `wwe.png`, `spider.png`, `detroit.png`, `doa.png`, `gow.png`).
2. Or set them in `styles.css` under the `:root` variables:
```css
:root {
  --img-maden: url('images/maden.png');
  --img-wwe: url('images/wwe.png');
  --img-spider: url('images/spider.png');
  --img-detroit: url('images/detroit.png');
  --img-doa: url('images/doa.png');
  --img-gow: url('images/gow.png');
}
```
Until then, clean, styled PlayStation placeholders are rendered in place.
