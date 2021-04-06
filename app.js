const { app, BrowserWindow } = require('electron')
const path = require('path')

function initalizeWindow () {
  const win = new BrowserWindow({
    width: 1400,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'html/preload.js')
    }
  })

  win.loadFile('html/index.html')
}

app.whenReady().then(() => {
  initalizeWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      initalizeWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
