const { app, BrowserWindow } = require('electron');
const path = require('path');

let isDev = process.env.NODE_ENV === 'development';
const startUrl = isDev ? 'http://localhost:3333' : path.join(__dirname, '/build/index.html');

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 900,
    height: 650,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 加载index.html文件
  win.loadURL(startUrl).then(() => console.log('load file success'));
  // 开发环境打开 开发者工具
  if (isDev) {
    win.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


// let mainWindow = null;
// const createWindow = () => {
//   let mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//       preload: path.join(__dirname, 'preload.js')
//     }
//   });
//
//   /**
//    * loadURL 分为两种情况
//    *  1.开发环境，指向 react 的开发环境地址
//    *  2.生产环境，指向 react build 后的 index.html
//    */

//
//   mainWindow.loadURL(startUrl).then(() => {
//     console.log('load success');
//   });
//
//   mainWindow.on('closed', () =>  mainWindow = null);
// };
//
// app.on('ready', () => mainWindow === null && createWindow());
//
// app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());
//
// app.on('activate', () => mainWindow === null && createWindow());