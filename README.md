# Omar Khalil Portfolio

Lightweight single-page portfolio built with plain HTML, CSS and JavaScript.

## Current direction
- Product-led visual language inspired by the clean typography and interface rhythm of Taqa Fitness
- System sans-serif typography with compact monospace labels
- Neutral grey, white, black and acid-yellow palette
- Real Taqa Fitness and 3D Solutions & Robotics screenshots
- No framework, build step, external font dependency or heavy animation library

## Responsive behavior
The layout is tuned for:
- small phones around 320–360 px
- current phones around 390–430 px
- tablets around 768–1024 px
- standard laptops/desktops around 1280–1440 px
- large screens at 1600 px+

Mobile changes include simplified navigation, single-column projects, readable stacked 3D-SR captures, compact service/tool cards, and a Taqa layout that keeps one primary product view plus two supporting screens.

## Performance work
- screenshots converted from PNG to responsive WebP assets
- `srcset` + `sizes` used for smaller downloads on mobile
- explicit image dimensions to reduce layout shift
- lazy loading + async image decoding
- no external web fonts
- below-the-fold content uses `content-visibility` where supported
- scroll work is throttled through `requestAnimationFrame`
- reduced-motion preference is respected
- content remains visible if JavaScript is unavailable

## Files
- `index.html`
- `styles.css`
- `script.js`
- `assets/` responsive WebP screenshots

## Before publishing
1. Replace `Omar_b_khalil@hotmail.com` if that will not be the final email.
2. Add LinkedIn/GitHub links if you want them public.
3. Confirm the exact wording of your contribution to 3D-SR.
4. Point your domain to the host.

## Deployment
This is a static site and can be deployed directly to Vercel, Netlify, Cloudflare Pages, GitHub Pages or any normal web host.
