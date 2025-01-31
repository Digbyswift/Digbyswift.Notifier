export default class StatusReport{
    checkDate : string;
    downMonitors : number;

    constructor (checkDate : string, downMonitors : number){
        this.checkDate = checkDate;
        this.downMonitors = downMonitors;
    }
}