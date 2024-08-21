import { LogEngine, LogEntryType } from 'whiskey-log'

function goToSleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 

export default async function sleep(le:LogEngine, text:string="..sleeping", seconds:number=1) {
    le.AddLogEntry(LogEntryType.Info, text + '(' + seconds + ' seconds) ..')
    for (let i = 0; i < seconds; i++) {
      await goToSleep(1000*seconds);
    }
}  