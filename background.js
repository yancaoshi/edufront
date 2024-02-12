const { app, BrowserWindow, session} = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

function createWindow () {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // 清除会话数据和缓存
  session.defaultSession.clearStorageData();

  if (isDev) {
    win.loadURL('http://localhost:8080/');
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html'));
  }

  // win.maximize();
}

app.whenReady().then(createWindow);
console.log('Current NODE_ENV:', process.env.NODE_ENV);


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
