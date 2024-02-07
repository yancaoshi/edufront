const { app, BrowserWindow } = require('electron');

function createWindow () {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.maximize();
  // 并加载应用的 index.html
  win.loadFile('dist/main.js');
}

app.on('ready', createWindow);
