const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow = null;
const createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  /**
   * loadURL 分为两种情况
   *  1.开发环境，指向 react 的开发环境地址
   *  2.生产环境，指向 react build 后的 index.html
   */
  const startUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : path.join(__dirname, '/build/index.html');
  mainWindow.loadURL(startUrl).then(() => {
    console.log("load success");
  });

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
};

app.on('ready', () => createWindow());

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit() );

app.on('activate', () => mainWindow === null && createWindow());