const { app, BrowserWindow } = require('electron');

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // 对于较新版本的Electron，你可能需要设置contextIsolation为false
    }
  });

  // 这里应该加载Vue应用的URL，如果你在开发模式下，它可能是Vue CLI的开发服务器地址
  // 例如：http://localhost:8080
  // 对于生产模式，你可能需要指向构建后的index.html文件
  // 例如：`file://${__dirname}/dist/index.html`
  win.loadURL('http://localhost:8080');
  // 打开开发者工具
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
