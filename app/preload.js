const {contextBridge, ipcRenderer} = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    showNotification: (message) => ipcRenderer.send('show-notification', message),
    onDowntimeReport: (callback) => ipcRenderer.on('downtime-report', (_event, value) => callback(value)),
    submitKey: (key) => ipcRenderer.send('submitKey', key)
})