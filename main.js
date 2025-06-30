const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  new BrowserWindow().loadFile('index.html');
});

app.on('window-all-closed', () => app.quit()); 