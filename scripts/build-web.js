// Copies the web app into www/ so Capacitor can bundle it into the APK.
const fs = require("fs");
fs.rmSync("www", { recursive: true, force: true });
fs.mkdirSync("www", { recursive: true });
fs.copyFileSync("index.html", "www/index.html");
console.log("Web build ready in ./www");
