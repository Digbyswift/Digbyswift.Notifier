const reportElement = document.getElementById('report-details');
const apiKeyForm = document.getElementById('api-form');
const reportingMessage = document.getElementById('reporting-message');
const clearButton = document.getElementById('clear-button');
const recentStatus = document.getElementById('recent-status');

function showNotification(title, body){
    new window.Notification(title, { body: body, icon: "tray-icon.png" });
    window.electronAPI.showNotification("notification shown");
}

function hideElement(element){
    if(!element.classList.contains('hidden')){
        element.classList.add('hidden');
    }
}

function showElement(element){
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden');
    }
}

if(apiKeyForm){
    apiKeyForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const value = document.getElementById('api-key-field').value;

        if(value){
            // To do - Add validation for API key
            window.electronAPI.submitKey(value);
    
            showElement(reportingMessage);
            hideElement(apiKeyForm);
        }
    });
}

window.electronAPI.onDowntimeReport((value) => {
    reportElement.innerHTML = value;
})

window.electronAPI.onStatusReport((value) => {
    recentStatus.innerHTML = value;
})

window.electronAPI.onNoKey(() => {
    showElement(apiKeyForm);
    hideElement(reportingMessage);
})

clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.electronAPI.clearApiKey();
    hideElement(reportingMessage);
    showElement(apiKeyForm);
})