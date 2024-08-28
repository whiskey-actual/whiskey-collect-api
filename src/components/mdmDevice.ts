import { LogEntryType } from "whiskey-log";
import { Sequelizer } from "whiskey-sequelize";
import validateData from "../utilities/validateData";
import config from "../config";

import { CleanedDate, CleanedString } from "whiskey-util";
import le from "../config/le";
import getDeviceId from "./getDeviceID";
import { DeviceAzureManaged } from "../models/DeviceAzureManaged";

export default async function mdmDevice(data:any):Promise<number> {
    config.le.logStack.push("mdmDevice")

    let output:number=0

    try {

        const mandatoryFields = [
            'DeviceName',
            'AzureManagedId',
            // 'AzureManagedDeviceName',
            // 'AzureManagedUserId',
            // 'AzureManagedDeviceOwnerType',
            // 'AzureManagedOperatingSystem',
            // 'AzureManagedComplianceState',
            // 'AzureManagedJailBroken',
            // 'AzureManagedManagementAgent',
            // 'AzureManagedOperatingSystemVersion',
            // 'AzureManagedEASDeviceID',
            // 'AzureManagedDeviceEnrollmentType',
            // 'AzureManagedActivationLockBypassCode',
            // 'AzureManagedEmailAddress',
            // 'AzureManagedAzureADDeviceID',
            // 'AzureManagedDeviceRegistrationState',
            // 'AzureManagedDeviceCategoryDisplayName',
            // 'AzureManagedExchangeAccessState',
            // 'AzureManagedExchangeAccessStateReason',
            // 'AzureManagedRemoteAssistanceSessionUrl',
            // 'AzureManagedRemoteAssistanceErrorDetails',
            // 'AzureManagedUserPrincipalName',
            // 'AzureManagedModel',
            // 'AzureManagedManufacturer',
            // 'AzureManagedIMEI',
            // 'AzureManagedSerialNumber',
            // 'AzureManagedPhoneNumber',
            // 'AzureManagedAndroidSecurityPatchLevel',
            // 'AzureManagedUserDisplayName',
            // 'AzureManagedConfigurationManagerClientEnabedFeatures',
            // 'AzureManagedWiFiMACAddress',
            // 'AzureManagedDeviceHealthAttestationState',
            // 'AzureManagedSubscriberCarrier',
            // 'AzureManagedMEID',
            // 'AzureManagedTotalStorageSpaceInBytes',
            // 'AzureManagedFreeStorageSpaceInBytes',
            // 'AzureManagedPartnerReportedThreatState',
            // 'AzureManagedRequireUserEnrollmentApproval',
            // 'AzureManagedICCID',
            // 'AzureManagedUDID',
            // 'AzureManagedNotes',
            // 'AzureManagedEthernetMacAddress',
            // 'AzureManagedPhysicalMemoryInBytes',
            // 'AzureManagedEnrolledDateTime',
            // 'AzureManagedLastSyncDateTime',
            // 'AzureManagedEASActivationDateTime',
            // 'AzureManagedExchangeLastSuccessfulSyncDateTime',
            // 'AzureManagedComplianceGracePeriodExpirationDateTime',
            // 'AzureManagedManagementCertificateExpirationDateTime',
            // 'AzureManagedIsEASActivated',
            // 'AzureManagedIsAzureADRegistered',
            // 'AzureManagedIsSupervised',
            // 'AzureManagedIsEncrypted',
        ]

        const validated = validateData(mandatoryFields, data)
        if(validated.isValid) {

            const DeviceName:string = data.DeviceName.trim()
            const AzureManagedId:string=data.AzureManagedId.trim()
            
            const AzureManagedDeviceName:string=data.AzureManagedDeviceName.trim()
            const AzureManagedUserId:string|undefined =CleanedString(data.AzureManagedUserId)
            const AzureManagedDeviceOwnerType:string|undefined =CleanedString(data.AzureManagedDeviceOwnerType)
            const AzureManagedOperatingSystem:string|undefined =CleanedString(data.AzureManagedOperatingSystem)
            const AzureManagedComplianceState:string|undefined =CleanedString(data.AzureManagedComplianceState)
            const AzureManagedJailBroken:string|undefined =CleanedString(data.AzureManagedJailBroken)
            const AzureManagedManagementAgent:string|undefined =CleanedString(data.AzureManagedManagementAgent)
            const AzureManagedOperatingSystemVersion:string|undefined =CleanedString(data.AzureManagedOperatingSystemVersion)
            const AzureManagedEASDeviceID:string|undefined =CleanedString(data.AzureManagedEASDeviceID)
            const AzureManagedDeviceEnrollmentType:string|undefined =CleanedString(data.AzureManagedDeviceEnrollmentType)
            const AzureManagedActivationLockBypassCode:string|undefined =CleanedString(data.AzureManagedActivationLockBypassCode)
            const AzureManagedEmailAddress:string|undefined =CleanedString(data.AzureManagedEmailAddress)
            const AzureManagedAzureADDeviceID:string|undefined =CleanedString(data.AzureManagedAzureADDeviceID)
            const AzureManagedDeviceRegistrationState:string|undefined =CleanedString(data.AzureManagedDeviceRegistrationState)
            const AzureManagedDeviceCategoryDisplayName:string|undefined =CleanedString(data.AzureManagedDeviceCategoryDisplayName)
            const AzureManagedExchangeAccessState:string|undefined =CleanedString(data.AzureManagedExchangeAccessState)
            const AzureManagedExchangeAccessStateReason:string|undefined =CleanedString(data.AzureManagedExchangeAccessStateReason)
            const AzureManagedRemoteAssistanceSessionUrl:string|undefined =CleanedString(data.AzureManagedRemoteAssistanceSessionUrl)
            const AzureManagedRemoteAssistanceErrorDetails:string|undefined =CleanedString(data.AzureManagedRemoteAssistanceErrorDetails)
            const AzureManagedUserPrincipalName:string|undefined =CleanedString(data.AzureManagedUserPrincipalName)
            const AzureManagedModel:string|undefined =CleanedString(data.AzureManagedModel)
            const AzureManagedManufacturer:string|undefined =CleanedString(data.AzureManagedManufacturer)
            const AzureManagedIMEI:string|undefined =CleanedString(data.AzureManagedIMEI)
            const AzureManagedSerialNumber:string|undefined =CleanedString(data.AzureManagedSerialNumber)
            const AzureManagedPhoneNumber:string|undefined =CleanedString(data.AzureManagedPhoneNumber)
            const AzureManagedAndroidSecurityPatchLevel:string|undefined =CleanedString(data.AzureManagedAndroidSecurityPatchLevel)
            const AzureManagedUserDisplayName:string|undefined =CleanedString(data.AzureManagedUserDisplayName)
            const AzureManagedConfigurationManagerClientEnabedFeatures:string|undefined =CleanedString(data.AzureManagedConfigurationManagerClientEnabedFeatures)
            const AzureManagedWiFiMACAddress:string|undefined =CleanedString(data.AzureManagedWiFiMACAddress)
            const AzureManagedDeviceHealthAttestationState:string|undefined =CleanedString(data.AzureManagedDeviceHealthAttestationState)
            const AzureManagedSubscriberCarrier:string|undefined =CleanedString(data.AzureManagedSubscriberCarrier)
            const AzureManagedMEID:string|undefined =CleanedString(data.AzureManagedMEID)
            const AzureManagedTotalStorageSpaceInBytes:string|undefined =CleanedString(data.AzureManagedTotalStorageSpaceInBytes)
            const AzureManagedFreeStorageSpaceInBytes:string|undefined =CleanedString(data.AzureManagedFreeStorageSpaceInBytes)
            const AzureManagedPartnerReportedThreatState:string|undefined =CleanedString(data.AzureManagedPartnerReportedThreatState)
            const AzureManagedRequireUserEnrollmentApproval:string|undefined =CleanedString(data.AzureManagedRequireUserEnrollmentApproval)
            const AzureManagedICCID:string|undefined =CleanedString(data.AzureManagedICCID)
            const AzureManagedUDID:string|undefined =CleanedString(data.AzureManagedUDID)
            const AzureManagedNotes:string|undefined =CleanedString(data.AzureManagedNotes)
            const AzureManagedEthernetMacAddress:string|undefined =CleanedString(data.AzureManagedEthernetMacAddress)
            const AzureManagedPhysicalMemoryInBytes:string|undefined =CleanedString(data.AzureManagedPhysicalMemoryInBytes)
            const AzureManagedEnrolledDateTime:Date|undefined =CleanedDate(data.AzureManagedEnrolledDateTime)
            const AzureManagedLastSyncDateTime:Date|undefined =CleanedDate(data.AzureManagedLastSyncDateTime)
            const AzureManagedEASActivationDateTime:Date|undefined =CleanedDate(data.AzureManagedEASActivationDateTime)
            const AzureManagedExchangeLastSuccessfulSyncDateTime:Date|undefined =CleanedDate(data.AzureManagedExchangeLastSuccessfulSyncDateTime)
            const AzureManagedComplianceGracePeriodExpirationDateTime:Date|undefined =CleanedDate(data.AzureManagedComplianceGracePeriodExpirationDateTime)
            const AzureManagedManagementCertificateExpirationDateTime:Date|undefined =CleanedDate(data.AzureManagedManagementCertificateExpirationDateTime)
            const AzureManagedIsEASActivated:boolean|undefined = Boolean(data.AzureManagedIsEASActivated)
            const AzureManagedIsAzureADRegistered:boolean|undefined = Boolean(data.AzureManagedIsAzureADRegistered)
            const AzureManagedIsSupervised:boolean|undefined = Boolean(data.AzureManagedIsSupervised)
            const AzureManagedIsEncrypted:boolean|undefined = Boolean(data.AzureManagedIsEncrypted)

            const ws = new Sequelizer()

            let DeviceID:number = await getDeviceId(DeviceName)
            try {
                output = await ws.createRow(le, DeviceAzureManaged, {
                    DeviceID,
                    AzureManagedId,
                    AzureManagedDeviceName,
                    AzureManagedUserId,
                    AzureManagedDeviceOwnerType,
                    AzureManagedOperatingSystem,
                    AzureManagedComplianceState,
                    AzureManagedJailBroken,
                    AzureManagedManagementAgent,
                    AzureManagedOperatingSystemVersion,
                    AzureManagedEASDeviceID,
                    AzureManagedDeviceEnrollmentType,
                    AzureManagedActivationLockBypassCode,
                    AzureManagedEmailAddress,
                    AzureManagedAzureADDeviceID,
                    AzureManagedDeviceRegistrationState,
                    AzureManagedDeviceCategoryDisplayName,
                    AzureManagedExchangeAccessState,
                    AzureManagedExchangeAccessStateReason,
                    AzureManagedRemoteAssistanceSessionUrl,
                    AzureManagedRemoteAssistanceErrorDetails,
                    AzureManagedUserPrincipalName,
                    AzureManagedModel,
                    AzureManagedManufacturer,
                    AzureManagedIMEI,
                    AzureManagedSerialNumber,
                    AzureManagedPhoneNumber,
                    AzureManagedAndroidSecurityPatchLevel,
                    AzureManagedUserDisplayName,
                    AzureManagedConfigurationManagerClientEnabedFeatures,
                    AzureManagedWiFiMACAddress,
                    AzureManagedDeviceHealthAttestationState,
                    AzureManagedSubscriberCarrier,
                    AzureManagedMEID,
                    AzureManagedTotalStorageSpaceInBytes,
                    AzureManagedFreeStorageSpaceInBytes,
                    AzureManagedPartnerReportedThreatState,
                    AzureManagedRequireUserEnrollmentApproval,
                    AzureManagedICCID,
                    AzureManagedUDID,
                    AzureManagedNotes,
                    AzureManagedEthernetMacAddress,
                    AzureManagedPhysicalMemoryInBytes,
                    AzureManagedEnrolledDateTime,
                    AzureManagedLastSyncDateTime,
                    AzureManagedEASActivationDateTime,
                    AzureManagedExchangeLastSuccessfulSyncDateTime,
                    AzureManagedComplianceGracePeriodExpirationDateTime,
                    AzureManagedManagementCertificateExpirationDateTime,
                    AzureManagedIsEASActivated,
                    AzureManagedIsAzureADRegistered,
                    AzureManagedIsSupervised,
                    AzureManagedIsEncrypted,
                }, true, true)         

            } catch(err:any) {
                le.AddLogEntry(LogEntryType.Error, "error persisting MDM device data: " + (err.message || 'unknown error'))
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
