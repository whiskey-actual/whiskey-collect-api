import { LogEntryType } from "whiskey-log";
import { Device } from "../models/Device";
import { Sequelizer } from "whiskey-sequelize";
import validateData from "../utilities/validateData";
import config from "../config";
import { DeviceAzure } from "../models/DeviceAzure";
import { CleanedDate, CleanedString } from "whiskey-util";
import le from "../config/le";
import getDeviceId from "./getDeviceID";

export default async function azureDevice(data:any):Promise<number> {
    config.le.logStack.push("azureDevice")

    let output:number=0

    try {

        const mandatoryFields = [
            'DeviceName',
            'AzureDeviceId',
            'AzureDeviceOwnership',
            'AzureDeviceVersion',
            'AzureEnrollmentType',
            'AzureManagementType',
            'AzureManufacturer',
            'AzureMDMAppId',
            'AzureModel',
            'AzureOperatingSystemVersion',
            'AzureProfileType',
            'AzureTrustType',
            'AzureApproximateLastSignInDateTime',
            'AzureCreatedDateTime',
            'AzureRegistrationDateTime',
            'AzureAccountEnabled',
            'AzureIsCompliant',
            'AzureIsManaged',
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
            const AzureDeviceOwnership:string = data.AzureDeviceOwnership.trim()
            const AzureDeviceVersion:string = data.AzureDeviceVersion.trim()
            const AzureEnrollmentType:string = data.AzureEnrollmentType.trim()
            const AzureManagementType:string = data.AzureManagementType.trim()
            const AzureManufacturer:string = data.AzureManufacturer.trim()
            const AzureMDMAppId:string = data.AzureMDMAppId.trim()
            const AzureModel:string = data.AzureModel.trim()
            const AzureOperatingSystemVersion:string = data.AzureOperatingSystemVersion.trim()
            const AzureProfileType:string = data.AzureProfileType.trim()
            const AzureTrustType:string = data.AzureTrustType.trim()
            const AzureApproximateLastSignInDateTime:Date = new Date(data.AzureApproximateLastSignInDateTime)
            const AzureCreatedDateTime:Date = new Date(data.AzureCreatedDateTime)
            const AzureRegistrationDateTime:Date = new Date(data.AzureRegistrationDateTime)
            const AzureAccountEnabled:boolean = Boolean(data.AzureAccountEnabled)
            const AzureIsCompliant:boolean = Boolean(data.AzureIsCompliant)
            const AzureIsManaged:boolean = Boolean(data.AzureIsManaged)

            // sometimes present
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

            const AzureOnPremisesSyncEnabled:boolean = Boolean(data.AzureOnPremisesSyncEnabled)
            const AzureIsRooted:boolean = Boolean(data.AzureIsRooted)

            const ws = new Sequelizer(config.le)

            let DeviceID:number = await getDeviceId(DeviceName)
            try {
                le.AddLogEntry(LogEntryType.Info, DeviceName + " : adding azure details .. ")
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
                })         

            } catch(err:any) {
                le.AddLogEntry(LogEntryType.Error, "error persisting azure device data: " + (err.message || 'unknown error'))
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
