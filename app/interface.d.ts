export interface IElectronAPI {
    onDowntimeReport: (callback : any) => Promise<void>,
    onStatusReport: (callback : any) => Promise<void>,
    onNoKey: (callback : any) => Promise<void>,
    submitKey: (key : string) => Promise<void>,
    clearApiKey: () => Promise<void>,
}

declare global {
    interface Window {
        electronAPI: IElectronAPI
    }
}