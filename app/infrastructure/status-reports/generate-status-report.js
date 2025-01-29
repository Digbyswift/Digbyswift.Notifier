function generateStatusReport(monitors){
    if(!Array.isArray(monitors)){
        return "";
    }
    
    let downMonitors = 0;

    for(let i = 0; i < monitors.length; i++){
        let monitor = monitors[i];
        switch(monitor['status']){
            case 8:
                downMonitors++;
                break;
            case 9:
                downMonitors++;
                break;
        }
    }
    
    return { checkDate : new Date().toString(), downMonitors : downMonitors }
}

module.exports = { generateStatusReport }