const NOTIFICATION_TITLE = 'Notification Button'
const NOTIFICATION_BODY = 'You Clicked the Notification Button'
const CLICK_MESSAGE = 'Notification clicked!'

function showNotification(){
    new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY, icon: "tray-icon.png" });
    window.electronAPI.showNotification("notification shown");
}

const reportElement = document.getElementById('report-details');
const apiKeyForm = document.getElementById('api-form');
const reportingMessage = document.getElementById('reporting-message');

apiKeyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = document.getElementById('api-key-field').value;
    window.electronAPI.submitKey(value);

    apiKeyForm.classList.add('hidden');
    reportingMessage.classList.remove('hidden');
});

window.electronAPI.onDowntimeReport((value) => {
    reportElement.innerHTML = value;
})

window.electronAPI.onNoKey(() => {
    apiKeyForm.classList.remove('hidden');
    reportingMessage.classList.add('hidden');
})