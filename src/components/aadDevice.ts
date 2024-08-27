import { LogEntryType } from "whiskey-log";
import { Device } from "../models/Device";
import { Sequelizer } from "whiskey-sequelize";
import validateData from "../utilities/validateData";
import config from "../config";
import { DeviceAzure } from "../models/DeviceAzure";
import { CleanedDate, CleanedString } from "whiskey-util";
import le from "../config/le";
import getDeviceId from "./getDeviceID";

export default async function aadDevice(data:any):Promise<number> {
    config.le.logStack.push("aadDevice")

    let output:number=0

    try {

        const mandatoryFields = [
            'DeviceName',
            'AzureDeviceId',
            //'AzureDeviceVersion',
            //'AzureOperatingSystemVersion',
            //'AzureProfileType',
            //'AzureTrustType',
            //'AzureApproximateLastSignInDateTime',
            //'AzureCreatedDateTime',
            //'AzureRegistrationDateTime',
            //'AzureAccountEnabled',
            //'AzureIsCompliant',
            //'AzureIsManaged',
            
            //'AzureDeviceOwnership',
            //'AzureEnrollmentType',
            //'AzureManagementType',
            //'AzureManufacturer',
            //'AzureMDMAppId',
            //'AzureModel',
            //'AzureDeviceCategory',
            //'AzureDeviceMetadata',
            //'AzureDomainName',
            //'AzureEnrollmentProfileType',
            //'AzureExternalSourceName',
            //'AzureOperatingSystem',
            //'AzureSourceType',
            //'AzureDeletedDateTime',
            //'AzureComplianceExpirationDateTime',
            //'AzureOnPremisesLastSyncDateTime',
            //'AzureOnPremisesSyncEnabled',
            //'AzureIsRooted',
        ]

        const validated = validateData(mandatoryFields, data)
        if(validated.isValid) {

            // always present
            const DeviceName:string = data.DeviceName.trim()
            const AzureDeviceId:string = data.AzureDeviceId.trim()
            const AzureDeviceVersion:string = data.AzureDeviceVersion.trim()
            const AzureOperatingSystemVersion:string = data.AzureOperatingSystemVersion.trim()
            const AzureProfileType:string = data.AzureProfileType.trim()
            const AzureTrustType:string = data.AzureTrustType.trim()
            const AzureApproximateLastSignInDateTime:Date = new Date(data.AzureApproximateLastSignInDateTime)
            const AzureCreatedDateTime:Date = new Date(data.AzureCreatedDateTime)
            const AzureRegistrationDateTime:Date = new Date(data.AzureRegistrationDateTime)

            // sometimes present
            const AzureDeviceOwnership:string|undefined = CleanedString(data.AzureDeviceOwnership)
            const AzureEnrollmentType:string|undefined = CleanedString(data.AzureEnrollmentType)
            const AzureManagementType:string|undefined = CleanedString(data.AzureManagementType)
            const AzureManufacturer:string|undefined = CleanedString(data.AzureManufacturer)
            const AzureMDMAppId:string|undefined = CleanedString(data.AzureMDMAppId)
            const AzureModel:string|undefined = CleanedString(data.AzureModel)

            const AzureDeviceCategory:string|undefined = CleanedString(data.AzureDeviceCategory)
            const AzureDeviceMetadata:string|undefined = CleanedString(data.AzureDeviceMetadata)
            const AzureDomainName:string|undefined = CleanedString(data.AzureDomainName)
            const AzureEnrollmentProfileType:string|undefined = CleanedString(data.AzureEnrollmentProfileType)
            const AzureExternalSourceName:string|undefined = CleanedString(data.AzureExternalSourceName)
            const AzureOperatingSystem:string|undefined = CleanedString(data.AzureOperatingSystem)
            const AzureSourceType:string|undefined = CleanedString(data.AzureSourceType)

            const AzureDeletedDateTime:Date|undefined = CleanedDate(data.AzureDeletedDateTime)
            const AzureComplianceExpirationDateTime:Date|undefined = CleanedDate(data.AzureComplianceExpirationDateTime)
            const AzureOnPremisesLastSyncDateTime:Date|undefined = CleanedDate(data.AzureOnPremisesLastSyncDateTime)

            const AzureOnPremisesSyncEnabled:boolean|undefined = Boolean(data.AzureOnPremisesSyncEnabled)
            const AzureIsRooted:boolean|undefined = Boolean(data.AzureIsRooted)
            const AzureAccountEnabled:boolean|undefined = Boolean(data.AzureAccountEnabled)
            const AzureIsCompliant:boolean|undefined = Boolean(data.AzureIsCompliant)
            const AzureIsManaged:boolean|undefined = Boolean(data.AzureIsManaged)

            const ws = new Sequelizer(config.le)

            let DeviceID:number = await getDeviceId(DeviceName)
            try {
                output = await ws.createRow(DeviceAzure, {
                    DeviceID,
                    AzureDeviceId,
                    AzureDeviceCategory,
                    AzureDeviceMetadata,
                    AzureDeviceOwnership,
                    AzureDeviceVersion,
                    AzureDomainName,
                    AzureEnrollmentProfileType,
                    AzureEnrollmentType,
                    AzureExternalSourceName,
                    AzureManagementType,
                    AzureManufacturer,
                    AzureMDMAppId,
                    AzureModel,
                    AzureOperatingSystem,
                    AzureOperatingSystemVersion,
                    AzureProfileType,
                    AzureSourceType,
                    AzureTrustType,
                    AzureDeletedDateTime,
                    AzureApproximateLastSignInDateTime,
                    AzureComplianceExpirationDateTime,
                    AzureCreatedDateTime,
                    AzureOnPremisesLastSyncDateTime,
                    AzureRegistrationDateTime,
                    AzureOnPremisesSyncEnabled,
                    AzureAccountEnabled,
                    AzureIsCompliant,
                    AzureIsManaged,
                    AzureIsRooted,
                }, true, true)         

            } catch(err:any) {
                le.AddLogEntry(LogEntryType.Error, "error persisting AAD device data: " + (err.message || 'unknown error'))
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
