const { app, BrowserWindow } = require("electron");
const path = require("path");

// const { app, BrowserWindow } = require('electron/main')
// const path = require('node:path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400, //800,
    height: 800, //600
    webPreferences: {
      nodeIntegration: true,
      sandbox: false, // newly added
      //      contentSecurityPolicy: "default-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com"},
      //   contentSecurityPolicy: "default-src 'self' https://fonts.googleapis.com; style-src 'self' 'self' https://fonts.googleapis.com; script-src 'self' https://api.nepcha.com; font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com; img-src 'self' data:; connect-src 'self' https://api.github.com;"

      contentSecurityPolicy:
        "default-src 'self' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' https://api.nepcha.com;",
    },
    additionalArguments: ["--disable-ipc-flooding-protection"],
  });

  // mainWindow.loadFile('./build/index.html');
  mainWindow.loadFile("./build/index.html");

  //   // Open the DevTools in development mode
  //   if (isDev) {
  //     mainWindow.webContents.openDevTools();
  //   }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    //  app.on('activate',  () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
