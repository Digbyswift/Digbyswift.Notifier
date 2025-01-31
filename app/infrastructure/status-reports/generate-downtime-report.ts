export default function generateDowntimeReport(monitors : any[]){
    if(!Array.isArray(monitors)){
        return "";
    }
    
    let names : string[] = [];

    for(let i = 0; i < monitors.length; i++){
        const monitor = monitors[i];
        names.push(monitor['friendly_name'])
    }

    return names;
}