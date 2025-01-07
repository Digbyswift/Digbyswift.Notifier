const reportElement = document.getElementById('report-details');
const apiKeyForm = document.getElementById('api-form');
const reportingMessage = document.getElementById('reporting-message');
const clearButton = document.getElementById('clear-button');

function showNotification(title, body){
    new window.Notification(title, { body: body, icon: "tray-icon.png" });
    window.electronAPI.showNotification("notification shown");
}

function toggleHide(element){
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

function toggleKeyForm(){
    toggleHide(apiKeyForm);
    toggleHide(reportingMessage);
}

if(apiKeyForm){
    apiKeyForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const value = document.getElementById('api-key-field').value;
        window.electronAPI.submitKey(value);
    
        toggleKeyForm();
    });
}

window.electronAPI.onDowntimeReport((value) => {
    reportElement.innerHTML = value;
})

window.electronAPI.onNoKey(() => {
    toggleKeyForm();
})

clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.electronAPI.clearApiKey();
    toggleKeyForm();
})