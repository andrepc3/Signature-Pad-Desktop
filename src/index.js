const { app, BrowserWindow } = require('electron');

let janela;

app.on('ready', () => {

    janela = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    // Hide the menu bar
    janela.setMenu(null)

    // Disable window maximize
    janela.setMaximizable(false)

    janela.setResizable(false)

    // Opens the html page
    janela.loadURL(`file://${__dirname}/index.html`)

});
