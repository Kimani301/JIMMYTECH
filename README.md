# JIMMY TECH Dashboard

A single-file, offline-capable business dashboard for a phone/electronics shop. It tracks **stock**, **sales**, **debts**, **repairs** and **reports**, and runs entirely in the browser with no server, build step or external dependencies.

## Features

- Stock management with quantity and selling price
- Sales recording
- Debt tracking
- Repair jobs and spare parts
- Reports with CSV export
- Light and dark theme (follows the device, can be toggled)
- Mobile-friendly layout
- Staff login with a brute-force lockout (30 seconds after failed attempts)

## Run it

Open `index.html` in any modern browser. That's it.

Or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Live site (GitHub Pages)

In the repository go to **Settings → Pages → Source → GitHub Actions**. Every push to `main` then publishes the site to `https://<your-username>.github.io/<repo-name>/`.

## Android APK

The workflow `.github/workflows/build-and-publish.yml` wraps `index.html` in a native Android app using [Capacitor](https://capacitorjs.com) and builds an APK on every push.

- **Get the APK:** open the **Actions** tab, click the latest run, and download `JIMMYTECH-apk` from **Artifacts**.
- **Public download link:** create a tag, for example `git tag v1.0.0 && git push --tags`. The APK is attached to a GitHub **Release**.
- **Signed release APK (optional):** add these repository secrets under **Settings → Secrets and variables → Actions**: `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`. Without them, only the debug APK is built.
- **Install:** copy the APK to an Android phone, open it, and allow "install unknown apps" when asked.

To build locally: `npm install && npm run build && npx cap add android && npx cap sync android`, then open `android/` in Android Studio.

## Data and privacy

All data is stored in the browser's `localStorage` on the device being used. Nothing is sent to a server.

- Data is **per browser and per device**. Clearing browser data erases it, so use the app's export/backup options regularly.
- Never commit real customer or financial data to this repository.

## Security note

The login is client-side only, which means it keeps casual users out but is **not real security**: anyone who can open the page can read the source. The built-in default password is in the source code, so change it in the app's settings, and keep the repository **private** if the dashboard is used for real business data.

## Project structure

```
.
├── index.html               # the whole application (HTML, CSS and JS)
├── package.json             # Capacitor dependencies (APK build)
├── capacitor.config.json    # Android app id and name
├── scripts/build-web.js     # copies index.html into www/ for the APK
├── .github/workflows/build-and-publish.yml   # Pages + APK workflow
├── README.md
├── LICENSE
└── .gitignore
```

## License

MIT, see [LICENSE](LICENSE).
