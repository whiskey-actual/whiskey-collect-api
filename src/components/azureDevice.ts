import { LogEntryType } from "whiskey-log";
import { Device } from "../models/Device";
import { Sequelizer } from "whiskey-sequelize";
import validateData from "../utilities/validateData";
import config from "../config";
import { DeviceAzure } from "../models/DeviceAzure";

export default async function azureDevice(data:any) {
    config.le.logStack.push("azureDevice")

    try {

        const mandatoryFields = [
            'DeviceName',
            'AzureDeviceId',
            'AzureDisplayName',
            'AzureId',
            'AzureDeviceCategory',
            'AzureDeviceMetadata',
            'AzureDeviceOwnership',
            'AzureDeviceVersion',
            'AzureDomainName',
            'AzureEnrollmentProfileType',
            'AzureEnrollmentType',
            'AzureExternalSourceName',
            'AzureManagementType',
            'AzureManufacturer',
            'AzureMDMAppId',
            'AzureModel',
            'AzureOperatingSystem',
            'AzureOperatingSystemVersion',
            'AzureProfileType',
            'AzureSourceType',
            'AzureTrustType',
            'AzureDeletedDateTime',
            'AzureApproximateLastSignInDateTime',
            'AzureComplianceExpirationDateTime',
            'AzureCreatedDateTime',
            'AzureOnPremisesLastSyncDateTime',
            'AzureRegistrationDateTime',
            'AzureOnPremisesSyncEnabled',
            'AzureAccountEnabled',
            'AzureIsCompliant',
            'AzureIsManaged',
            'AzureIsRooted',
        ]

        const validated = validateData(mandatoryFields, data)
        if(validated.isValid) {

            const DeviceName:string = data.DeviceName.trim()
           
            const AzureDeviceId:string = data.AzureDeviceId.trim()
            const AzureDisplayName:string = data.AzureDisplayName.trim()
            const AzureId:string = data.AzureId.trim()
            const AzureDeviceCategory:string = data.AzureDeviceCategory.trim()
            const AzureDeviceMetadata:string = data.AzureDeviceMetadata.trim()
            const AzureDeviceOwnership:string = data.AzureDeviceOwnership.trim()
            const AzureDeviceVersion:string = data.AzureDeviceVersion.trim()
            const AzureDomainName:string = data.AzureDomainName.trim()
            const AzureEnrollmentProfileType:string = data.AzureEnrollmentProfileType.trim()
            const AzureEnrollmentType:string = data.AzureEnrollmentType.trim()
            const AzureExternalSourceName:string = data.AzureExternalSourceName.trim()
            const AzureManagementType:string = data.AzureManagementType.trim()
            const AzureManufacturer:string = data.AzureManufacturer.trim()
            const AzureMDMAppId:string = data.AzureMDMAppId.trim()
            const AzureModel:string = data.AzureModel.trim()
            const AzureOperatingSystem:string = data.AzureOperatingSystem.trim()
            const AzureOperatingSystemVersion:string = data.AzureOperatingSystemVersion.trim()
            const AzureProfileType:string = data.AzureProfileType.trim()
            const AzureSourceType:string = data.AzureSourceType.trim()
            const AzureTrustType:string = data.AzureTrustType.trim()
            
            const AzureDeletedDateTime:Date = new Date(data.AzureDeletedDateTime)
            const AzureApproximateLastSignInDateTime:Date = new Date(data.AzureApproximateLastSignInDateTime)
            const AzureComplianceExpirationDateTime:Date = new Date(data.AzureComplianceExpirationDateTime)
            const AzureCreatedDateTime:Date = new Date(data.AzureCreatedDateTime)
            const AzureOnPremisesLastSyncDateTime:Date = new Date(data.AzureOnPremisesLastSyncDateTime)
            const AzureRegistrationDateTime:Date = new Date(data.AzureRegistrationDateTime)
            
            const AzureOnPremisesSyncEnabled:boolean = Boolean(data.AzureOnPremisesSyncEnabled)
            const AzureAccountEnabled:boolean = Boolean(data.AzureAccountEnabled)
            const AzureIsCompliant:boolean = Boolean(data.AzureIsCompliant)
            const AzureIsManaged:boolean = Boolean(data.AzureIsManaged)
            const AzureIsRooted:boolean = Boolean(data.AzureIsRooted)

            const ws = new Sequelizer(config.le)
            let DeviceID = await ws.getId(Device, DeviceName)
            if(!DeviceID) {
                DeviceID = await ws.createRow(Device, {DeviceName})
            }
            await ws.createRow(DeviceAzure, {
                DeviceID,
                AzureDeviceId,
                AzureDisplayName,
                AzureId,
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
        }
    } catch(err:any) {
        config.le.AddLogEntry(LogEntryType.Error, err)
        throw new Error(err)
    } finally {
        config.le.logStack.pop()
    }
    
    return
    
}
