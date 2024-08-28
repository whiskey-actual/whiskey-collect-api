import { LogEntryType } from "whiskey-log";
import { Device } from "../models/Device";
import { DeviceActiveDirectory } from "../models/DeviceActiveDirectory";
import { Sequelizer } from "whiskey-sequelize";
import validateData from "../utilities/validateData";
import config from "../config";
import le from "../config/le";
import getDeviceId from "./getDeviceID";

export default async function activeDirectoryDevice(data:any) {
    config.le.logStack.push("activeDirectoryDevice")

    let output:number=0

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

        const validated = validateData(mandatoryFields, data)
        if(validated.isValid) {

            const DeviceName:string = data.DeviceName.trim()
            const ActiveDirectoryDN:string = data.DeviceDN.trim()
            const ActiveDirectoryOperatingSystem:string = data.ActiveDirectoryOperatingSystem.trim()
            const ActiveDirectoryOperatingSystemVersion:string = data.ActiveDirectoryOperatingSystemVersion.trim()
            const ActiveDirectoryDNSHostName:string = data.ActiveDirectoryDNSHostName.trim()

            const ActiveDirectoryLogonCount:number = parseInt(data.ActiveDirectoryLogonCount)
            
            const ActiveDirectoryWhenCreated:Date = new Date(data.ActiveDirectoryWhenCreated)
            const ActiveDirectoryWhenChanged:Date = new Date(data.ActiveDirectoryWhenChanged)
            const ActiveDirectoryLastLogon:Date = new Date(data.ActiveDirectoryLastLogon)
            const ActiveDirectoryPwdLastSet:Date = new Date(data.ActiveDirectoryPwdLastSet)
            const ActiveDirectoryLastLogonTimestamp:Date = new Date(data.ActiveDirectoryLastLogonTimestamp)

            const ws = new Sequelizer()
            let DeviceID:number = await getDeviceId(DeviceName)
            try {
                output = await ws.createRow(le, DeviceActiveDirectory, {
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
                }, true, true)
            } catch(err:any) {
                le.AddLogEntry(LogEntryType.Error, "error persisting AD device data: " + (err.message || 'unknown error'))
                throw new Error(err)
            }
            
        }
        
    } catch(err:any) {
        config.le.AddLogEntry(LogEntryType.Error, err)
        throw new Error(err)
    } finally {
        config.le.logStack.pop()
    }
    
    return output
    
}
