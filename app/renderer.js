const NOTIFICATION_TITLE = 'Notification Button'
const NOTIFICATION_BODY = 'You Clicked the Notification Button'
const CLICK_MESSAGE = 'Notification clicked!'

function showNotification(){
    new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY, icon: "tray-icon.png" });
    window.electronAPI.showNotification("notification shown");
}

const reportElement = document.getElementById('report-details');
window.electronAPI.onDowntimeReport((value) => {
    reportElement.innerHTML = value;
})