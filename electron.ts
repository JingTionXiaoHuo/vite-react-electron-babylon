const { app, BrowserWindow } = require("electron");
// 引入node的 path 和url模块
const path = require("path");
const url = require("url");

// 获取在 package.json 中的命令脚本传入的参数，来判断是开发还是生产环境
const mode = process.argv[2];

function createMainWindow() {

  const { screen } = require('electron')
  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    title: "KiyaのTool",
    icon: path.join(__dirname, "./public/img/256.ico"),
    frame: false,
    show: false,
    resizable: false,
    transparent: true,
    backgroundColor: "#00000000",
    maximizable: false,
    webPreferences: {
      // webSecurity: false,
      preload: path.join(__dirname, "./src/electron-preload.js"),
      accessibleTitle: "KiyaのTool",
      // contextIsolation: false,
      nodeIntegration: true,
      // nodeIntegrationInWorker: true,
    },
  });

  //判断是否是开发模式
  if (mode === "dev") {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "./build/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  //ipc模块
  let ipcMain = require("electron").ipcMain;
  
  //接收最小化命令
  ipcMain.on("window-min", function () {
    mainWindow.minimize();
  });

  ipcMain.on("chuantou", function () {
    console.log("chuantou");
    // mainWindow.setIgnoreMouseEvents(true, {
    //   forward: true,
    // });
  });

  ipcMain.on("huanyuan", function () {
    console.log("huanyuan");
    // mainWindow.setIgnoreMouseEvents(false);
  });
}
app.whenReady().then(() => {
  createMainWindow();
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
