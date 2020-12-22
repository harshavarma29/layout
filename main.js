console.log('working')

const { BrowserWindow } = require('electron');
const electron = require('electron');
const window = electron.BrowserWindow;
const app = electron.app;
const path = require('path');
const url = require('url')

var windows;

const createWindow = () => {
    windows = new window();

    windows.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

}

app.on('ready', createWindow);