function generateDowntimeReport(monitors){
    if(!Array.isArray(monitors)){
        return "";
    }
    
    let names = [];

    for(let i = 0; i < monitors.length; i++){
        const monitor = monitors[i];
        names.push(monitor['friendly_name'])
    }

    return names;
}

module.exports = { generateDowntimeReport }