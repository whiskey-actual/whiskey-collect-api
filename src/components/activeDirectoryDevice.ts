import { LogEngine } from "whiskey-log";
import Device from "../models/Device";
import DeviceActiveDirectory from "../models/DeviceActiveDirectory";
import { Sequelizer } from "whiskey-sequelize";
import validateData from "../utilities/validateData";

export default async function activeDirectoryDevice(le:LogEngine, data:any) {
    le.logStack.push("device")

    try {

        const mandatoryFields = [
            'DeviceName',
            'DeviceDN',
            'ActiveDirectoryOperatingSystem',
            'ActiveDirectoryOperatingSystemVersion',
            'ActiveDirectoryDNSHostName',
            'ActiveDirectoryLogonCount',
            'ActiveDirectoryWhenCreated',
            'ActiveDirectoryWhenChanged',
            'ActiveDirectoryLastLogon',
            'ActiveDirectoryPwdLastSet',
            'ActiveDirectoryLastLogonTimestamp'
        ]

        const validated = validateData(le, mandatoryFields, data)
        if(validated.isValid) {

            const DeviceName:string = data.DeviceName.trim()
            const ActiveDirectoryDN:string = data.DeviceDN.trim()
            const ActiveDirectoryOperatingSystem:string = data.ActiveDirectoryOperatingSystem.trim()
            const ActiveDirectoryOperatingSystemVersion:string = data.ActiveDirectoryOperatingSystemVersion.trim()
            const ActiveDirectoryDNSHostName:string = data.ActiveDirectoryDNSHostName
            const ActiveDirectoryLogonCount:number = parseInt(data.ActiveDirectoryLogonCount)
            const ActiveDirectoryWhenCreated:Date = new Date(data.ActiveDirectoryWhenCreated)
            const ActiveDirectoryWhenChanged:Date = new Date(data.ActiveDirectoryWhenChanged)
            const ActiveDirectoryLastLogon:Date = new Date(data.ActiveDirectoryLastLogon)
            const ActiveDirectoryPwdLastSet:Date = new Date(data.ActiveDirectoryPwdLastSet)
            const ActiveDirectoryLastLogonTimestamp:Date = new Date(data.ActiveDirectoryLastLogonTimestamp)

            const ws = new Sequelizer(le)
            let DeviceID = await ws.getId(Device, DeviceName)
            if(!DeviceID) {
                DeviceID = await ws.createRow(Device, {DeviceName})
            }
            await ws.createRow(DeviceActiveDirectory, {
                DeviceID,
                ActiveDirectoryDN,
                ActiveDirectoryOperatingSystem,
                ActiveDirectoryOperatingSystemVersion,
                ActiveDirectoryDNSHostName,
                ActiveDirectoryLogonCount,
                ActiveDirectoryWhenCreated,
                ActiveDirectoryWhenChanged,
                ActiveDirectoryLastLogon,
                ActiveDirectoryPwdLastSet,
                ActiveDirectoryLastLogonTimestamp
            })
            
        }
        
    } catch(err:any) {
        le.AddLogEntry(LogEngine.EntryType.Error, err)
        throw new Error(err)
    } finally {
        le.logStack.pop()
    }
    
    return
    
}
