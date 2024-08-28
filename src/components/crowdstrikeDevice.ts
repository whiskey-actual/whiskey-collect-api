import { LogEntryType } from "whiskey-log";
import { Device } from "../models/Device";
import { Sequelizer } from "whiskey-sequelize";
import validateData from "../utilities/validateData";
import config from "../config";

import { CleanedDate, CleanedString } from "whiskey-util";
import le from "../config/le";
import getDeviceId from "./getDeviceID";
import { DeviceCrowdstrike } from "../models/DeviceCrowdstrike";

export default async function crowdstrikeDevice(data:any):Promise<number> {
    config.le.logStack.push("crowdstrikeDevice")

    let output:number=0

    try {

        const mandatoryFields = [
            'DeviceName',
            'CrowdstrikeDeviceId',
            //'CrowdstrikeCID',
            //'CrowdstrikeAgentVersion',
            //'CrowdstrikeBIOSManufacturer',
            //'CrowdstrikeBIOSVersion',
            //'CrowdstrikeExternalIP',
            //'CrowdstrikeMACAddress',
            //'CrowdstrikeLocalIP',
            //'CrowdstrikeMachineDomain',
            //'CrowdstrikeMajorVersion',
            //'CrowdstrikeMinorVersion',
            //'CrowdstrikeOSBuild',
            //'CrowdstrikeOSVersion',
            //'CrowdstrikePlatformName',
            //'CrowdstrikeReducedFunctionalityMode',
            //'CrowdstrikeProductTypeDesc',
            //'CrowdstrikeProvisionStatus',
            //'CrowdstrikeSerialNumber',
            //'CrowdstrikeServicePackMajor',
            //'CrowdstrikeServicePackMinor',
            //'CrowdstrikeStatus',
            //'CrowdstrikeSystemManufacturer',
            //'CrowdstrikeSystemProductName',
            //'CrowdstrikeKernelVersion',
            //'CrowdstrikeFirstSeenDateTime',
            //'CrowdstrikeLastSeenDateTime',
            //'CrowdstrikeModifiedDateTime',
        ]

        const validated = validateData(mandatoryFields, data)
        if(validated.isValid) {

            const DeviceName:string = data.DeviceName.trim()
            const CrowdstrikeDeviceId:string = data.CrowdstrikeDeviceId.trim()
            const CrowdstrikeCID:string|undefined=CleanedString(data.CrowdstrikeCID)
            const CrowdstrikeAgentVersion:string|undefined=CleanedString(data.CrowdstrikeAgentVersion)
            const CrowdstrikeBIOSManufacturer:string|undefined=CleanedString(data.CrowdstrikeBIOSManufacturer)
            const CrowdstrikeBIOSVersion:string|undefined=CleanedString(data.CrowdstrikeBIOSVersion)
            const CrowdstrikeExternalIP:string|undefined=CleanedString(data.CrowdstrikeExternalIP)
            const CrowdstrikeMACAddress:string|undefined=CleanedString(data.CrowdstrikeMACAddress)
            const CrowdstrikeLocalIP:string|undefined=CleanedString(data.CrowdstrikeLocalIP)
            const CrowdstrikeMachineDomain:string|undefined=CleanedString(data.CrowdstrikeMachineDomain)
            const CrowdstrikeMajorVersion:string|undefined=CleanedString(data.CrowdstrikeMajorVersion)
            const CrowdstrikeMinorVersion:string|undefined=CleanedString(data.CrowdstrikeMinorVersion)
            const CrowdstrikeOSBuild:string|undefined=CleanedString(data.CrowdstrikeOSBuild)
            const CrowdstrikeOSVersion:string|undefined=CleanedString(data.CrowdstrikeOSVersion)
            const CrowdstrikePlatformName:string|undefined=CleanedString(data.CrowdstrikePlatformName)
            const CrowdstrikeReducedFunctionalityMode:string|undefined=CleanedString(data.CrowdstrikeReducedFunctionalityMode)
            const CrowdstrikeProductTypeDesc:string|undefined=CleanedString(data.CrowdstrikeProductTypeDesc)
            const CrowdstrikeProvisionStatus:string|undefined=CleanedString(data.CrowdstrikeProvisionStatus)
            const CrowdstrikeSerialNumber:string|undefined=CleanedString(data.CrowdstrikeSerialNumber)
            const CrowdstrikeServicePackMajor:string|undefined=CleanedString(data.CrowdstrikeServicePackMajor)
            const CrowdstrikeServicePackMinor:string|undefined=CleanedString(data.CrowdstrikeServicePackMinor)
            const CrowdstrikeStatus:string|undefined=CleanedString(data.CrowdstrikeStatus)
            const CrowdstrikeSystemManufacturer:string|undefined=CleanedString(data.CrowdstrikeSystemManufacturer)
            const CrowdstrikeSystemProductName:string|undefined=CleanedString(data.CrowdstrikeSystemProductName)
            const CrowdstrikeKernelVersion:string|undefined=CleanedString(data.CrowdstrikeKernelVersion)
            const CrowdstrikeFirstSeenDateTime:Date|undefined=CleanedDate(data.CrowdstrikeFirstSeenDateTime)
            const CrowdstrikeLastSeenDateTime:Date|undefined=CleanedDate(data.CrowdstrikeLastSeenDateTime)
            const CrowdstrikeModifiedDateTime:Date|undefined=CleanedDate(data.CrowdstrikeModifiedDateTime)

            const ws = new Sequelizer()

            let DeviceID:number = await getDeviceId(DeviceName)
            try {
                output = await ws.createRow(le, DeviceCrowdstrike, {
                    DeviceID,
                    DeviceName,
                    CrowdstrikeDeviceId,
                    CrowdstrikeCID,
                    CrowdstrikeAgentVersion,
                    CrowdstrikeBIOSManufacturer,
                    CrowdstrikeBIOSVersion,
                    CrowdstrikeExternalIP,
                    CrowdstrikeMACAddress,
                    CrowdstrikeLocalIP,
                    CrowdstrikeMachineDomain,
                    CrowdstrikeMajorVersion,
                    CrowdstrikeMinorVersion,
                    CrowdstrikeOSBuild,
                    CrowdstrikeOSVersion,
                    CrowdstrikePlatformName,
                    CrowdstrikeReducedFunctionalityMode,
                    CrowdstrikeProductTypeDesc,
                    CrowdstrikeProvisionStatus,
                    CrowdstrikeSerialNumber,
                    CrowdstrikeServicePackMajor,
                    CrowdstrikeServicePackMinor,
                    CrowdstrikeStatus,
                    CrowdstrikeSystemManufacturer,
                    CrowdstrikeSystemProductName,
                    CrowdstrikeKernelVersion,
                    CrowdstrikeFirstSeenDateTime,
                    CrowdstrikeLastSeenDateTime,
                    CrowdstrikeModifiedDateTime,
                }, true, true)         

            } catch(err:any) {
                le.AddLogEntry(LogEntryType.Error, "error persisting crowdstrike device data: " + (err.message || 'unknown error'))
                throw new Error(err)
            }
              
        }
    } catch(err:any) {
        config.le.AddLogEntry(LogEntryType.Error, data)
        //throw new Error(err)
    } finally {
        config.le.logStack.pop()
    }
    
    return output
    
}
