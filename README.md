# FIP Config Viewer — Official Product Website

Official website for **FIP Config Viewer** — fire panel configs, anywhere.

Hosted on GitHub Pages with custom domain: [fipconfigviewer.com](https://fipconfigviewer.com)

---

## 📱 App Links

- **Windows (Microsoft Store):** [Download on Microsoft Store](https://apps.microsoft.com/detail/9mz8tl0hw1b6?hl=en-GB&gl=AU)
- **iOS & iPadOS (App Store):** [Download on Apple App Store](https://apps.apple.com/app/fip-config-viewer/id6784992438)
- **Android (Google Play):** [Get it on Google Play](https://play.google.com/store/apps/details?id=com.fipviewer)

---

## 🌐 Porkbun Custom Domain Configuration

To connect `fipconfigviewer.com` from Porkbun to this GitHub repository:

1. **Log in to Porkbun** and navigate to your Domain Management for `fipconfigviewer.com`.
2. Open **DNS Records** (Details > Edit DNS Records).
3. **Add Apex `A` Records** (Host: `@` or blank):
   - Type: `A`, Answer: `185.199.108.153`
   - Type: `A`, Answer: `185.199.109.153`
   - Type: `A`, Answer: `185.199.110.153`
   - Type: `A`, Answer: `185.199.111.153`
4. **Add `www` CNAME Record**:
   - Host: `www`
   - Type: `CNAME`
   - Answer: `pettably.github.io`
5. **Enable HTTPS in GitHub**:
   - Go to your GitHub repository: [pettably/fipconfigviewerpage](https://github.com/pettably/fipconfigviewerpage)
   - Navigate to **Settings** > **Pages**
   - Source: Deploy from branch `main` (`/root`)
   - Custom domain: `fipconfigviewer.com` (already set via `CNAME` file in this repo)
   - Check **Enforce HTTPS** (once DNS propagates and certificate is issued).

---

## 🛠️ Tech Stack

- Zero-dependency, ultra-lightweight static web page (HTML5, Vanilla CSS3, Vanilla ES6 JS)
- Fast load times and high-contrast dark industrial theme
- Built-in interactive screenshot explorer & lightbox modal
- Filterable & searchable panel compatibility matrix

---

## ✉️ Contact & Inquiries

For support, feedback, or corporate licensing (10-user packs):
- Email: [laneydevelops@gmail.com](mailto:laneydevelops@gmail.com)

