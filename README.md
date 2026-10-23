# JIMMY TECH Dashboard

- `www/index.html` : the whole app (web, Android via Capacitor, Windows via Electron)
- `electron/main.js` : desktop wrapper
- `.github/workflows/build-windows-exe.yml` : builds the Windows .exe on GitHub
- `.github/workflows/pages.yml` : publishes the web version to GitHub Pages

## Get the .exe
GitHub repo -> Actions -> "Build Windows EXE" -> Run workflow.
When it finishes, open the run and download the **JIMMYTECH-windows** artifact:
- `JIMMYTECH-1.0.0-nsis.exe`     installer (adds a desktop shortcut)
- `JIMMYTECH-1.0.0-portable.exe` runs without installing

Windows may show a blue "SmartScreen" warning because the .exe is not code-signed.
Click "More info" -> "Run anyway".

Data is stored on the computer running the app (separate from the phone / browser copy).
Use Settings -> "Download backup" / "Restore backup" to move data between devices.
