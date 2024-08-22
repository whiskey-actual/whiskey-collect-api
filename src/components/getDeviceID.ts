import { LogEntryType } from "whiskey-log";
import { Device } from "../models/Device";
import { Sequelizer } from "whiskey-sequelize";
import le from "../config/le";

export default async function getDeviceId(DeviceName:string):Promise<number> {
    le.logStack.push("getDeviceId")

    let output:number=0

    try {
    
        const ws = new Sequelizer(le)

        //le.AddLogEntry(LogEntryType.Info, ".. getting deviceId: " + DeviceName)

        let DeviceID:number|undefined=undefined
        try {
            DeviceID = await ws.getId(Device, DeviceName)
            if(!DeviceID) {
                //le.AddLogEntry(LogEntryType.Info, "device not found: " + DeviceName + ", adding ..")
                DeviceID = await ws.createRow(Device, {DeviceName})
                le.AddLogEntry(LogEntryType.Add, DeviceName)
            } else {
                le.AddLogEntry(LogEntryType.Success, DeviceName)
            }
        } catch(err:any) {
            le.AddLogEntry(LogEntryType.Error, "error getting DeviceID: " + (err.message || 'unknown error'))
            throw new Error(err)
        }

        output=DeviceID
            
    } catch(err:any) {
        le.AddLogEntry(LogEntryType.Error, DeviceName + ": " + (err.message || 'unknown error'))
        throw new Error(err)
    } finally {
        le.logStack.pop()
    }
    
    return output
    
}
