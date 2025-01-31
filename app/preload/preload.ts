const {contextBridge, ipcRenderer} = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    // - Current unused in favour of a new browser window - showNotification: (message) => ipcRenderer.send('show-notification', message),
    onDowntimeReport: (callback : any) => ipcRenderer.on('downtime-report', (_event, value) => callback(value)),
    onStatusReport: (callback : any) => ipcRenderer.on('status-report', (_event, value) => callback(value)),
    onNoKey: (callback : any) => ipcRenderer.on('no-key', (_event, value) => callback(value)),
    submitKey: (key : string) => ipcRenderer.send('submitKey', key),
    clearApiKey: () => ipcRenderer.send('clearApiKey')
})