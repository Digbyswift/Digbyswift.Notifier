const NOTIFICATION_TITLE = 'Notification Button'
const NOTIFICATION_BODY = 'You Clicked the Notification Button'
const CLICK_MESSAGE = 'Notification clicked!'

const reportElement = document.getElementById('report-details');
const apiKeyForm = document.getElementById('api-form');
const reportingMessage = document.getElementById('reporting-message');
const clearButton = document.getElementById('clear-button');

function showNotification(){
    new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY, icon: "tray-icon.png" });
    window.electronAPI.showNotification("notification shown");
}

function toggle(element){
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

function toggleHidden(){
    toggle(apiKeyForm);
    toggle(reportingMessage);
}

apiKeyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = document.getElementById('api-key-field').value;
    window.electronAPI.submitKey(value);

    toggleHidden();
});

window.electronAPI.onDowntimeReport((value) => {
    reportElement.innerHTML = value;
})

window.electronAPI.onNoKey(() => {
    toggleHidden();
})

clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.electronAPI.clearApiKey();
    toggleHidden();
})