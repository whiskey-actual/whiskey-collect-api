import sql from 'sequelize'
import {getDatabase} from '../config/db'
import Device from './Device';

const db = getDatabase()

const DeviceAzureManaged = db.define("DeviceAzureManaged", {
    DeviceAzureManagedID:                                   {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:false},
    AzureManagedId:                                         {type:sql.STRING, allowNull:false},  // string;
    AzureManagedDeviceName:                                 {type:sql.STRING},  // string|undefined;
    AzureManagedUserId:                                     {type:sql.STRING},  // string|undefined;
    AzureManagedDeviceOwnerType:                            {type:sql.STRING},  // string|undefined;
    AzureManagedOperatingSystem:                            {type:sql.STRING},  // string|undefined;
    AzureManagedComplianceState:                            {type:sql.STRING},  // string|undefined;
    AzureManagedJailBroken:                                 {type:sql.STRING},  // string|undefined;
    AzureManagedManagementAgent:                            {type:sql.STRING},  // string|undefined;
    AzureManagedOperatingSystemVersion:                     {type:sql.STRING},  // string|undefined;
    AzureManagedEASDeviceID:                                {type:sql.STRING},  // string|undefined;
    AzureManagedDeviceEnrollmentType:                       {type:sql.STRING},  // string|undefined;
    AzureManagedActivationLockBypassCode:                   {type:sql.STRING},  // string|undefined;
    AzureManagedEmailAddress:                               {type:sql.STRING},  // string|undefined;
    AzureManagedAzureADDeviceID:                            {type:sql.STRING},  // string|undefined;
    AzureManagedDeviceRegistrationState:                    {type:sql.STRING},  // string|undefined;
    AzureManagedDeviceCategoryDisplayName:                  {type:sql.STRING},  // string|undefined;
    AzureManagedExchangeAccessState:                        {type:sql.STRING},  // string|undefined;
    AzureManagedExchangeAccessStateReason:                  {type:sql.STRING},  // string|undefined;
    AzureManagedRemoteAssistanceSessionUrl:                 {type:sql.STRING},  // string|undefined;
    AzureManagedRemoteAssistanceErrorDetails:               {type:sql.STRING},  // string|undefined;
    AzureManagedUserPrincipalName:                          {type:sql.STRING},  // string|undefined;
    AzureManagedModel:                                      {type:sql.STRING},  // string|undefined;
    AzureManagedManufacturer:                               {type:sql.STRING},  // string|undefined;
    AzureManagedIMEI:                                       {type:sql.STRING},  // string|undefined;
    AzureManagedSerialNumber:                               {type:sql.STRING},  // string|undefined;
    AzureManagedPhoneNumber:                                {type:sql.STRING},  // string|undefined;
    AzureManagedAndroidSecurityPatchLevel:                  {type:sql.STRING},  // string|undefined;
    AzureManagedUserDisplayName:                            {type:sql.STRING},  // string|undefined;
    AzureManagedConfigurationManagerClientEnabedFeatures:   {type:sql.STRING},  // string|undefined;
    AzureManagedWiFiMACAddress:                             {type:sql.STRING},  // string|undefined;
    AzureManagedDeviceHealthAttestationState:               {type:sql.STRING},  // string|undefined;
    AzureManagedSubscriberCarrier:                          {type:sql.STRING},  // string|undefined;
    AzureManagedMEID:                                       {type:sql.STRING},  // string|undefined;
    AzureManagedTotalStorageSpaceInBytes:                   {type:sql.STRING},  // string|undefined;
    AzureManagedFreeStorageSpaceInBytes:                    {type:sql.STRING},  // string|undefined;
    AzureManagedPartnerReportedThreatState:                 {type:sql.STRING},  // string|undefined;
    AzureManagedRequireUserEnrollmentApproval:              {type:sql.STRING},  // string|undefined;
    AzureManagedICCID:                                      {type:sql.STRING},  // string|undefined;
    AzureManagedUDID:                                       {type:sql.STRING},  // string|undefined;
    AzureManagedNotes:                                      {type:sql.STRING},  // string|undefined;
    AzureManagedEthernetMacAddress:                         {type:sql.STRING},  // string|undefined;
    AzureManagedPhysicalMemoryInBytes:                      {type:sql.STRING},  // string|undefined;
    AzureManagedEnrolledDateTime:                           {type:sql.DATE},  // Date|undefined;
    AzureManagedLastSyncDateTime:                           {type:sql.DATE},  // Date|undefined;
    AzureManagedEASActivationDateTime:                      {type:sql.DATE},  // Date|undefined;
    AzureManagedExchangeLastSuccessfulSyncDateTime:         {type:sql.DATE},  // Date|undefined;
    AzureManagedComplianceGracePeriodExpirationDateTime:    {type:sql.DATE},  // Date|undefined;
    AzureManagedManagementCertificateExpirationDateTime:    {type:sql.DATE},  // Date|undefined;
    AzureManagedIsEASActivated:                             {type:sql.BOOLEAN},  // boolean|undefined;
    AzureManagedIsAzureADRegistered:                        {type:sql.BOOLEAN},  // boolean|undefined;
    AzureManagedIsSupervised:                               {type:sql.BOOLEAN},  // boolean|undefined;
    AzureManagedIsEncrypted:                                {type:sql.BOOLEAN},  // boolean|undefined;
},
{
    freezeTableName: true,
    modelName: 'DeviceAzureManaged',
    initialAutoIncrement: '0'
});

DeviceAzureManaged.upsert({DeviceAzureManagedID:0, AzureManagedId:'UNKNOWN'})


DeviceAzureManaged.belongsTo(Device, {foreignKey: {name:'DeviceID', allowNull:false, defaultValue:0}})

export default DeviceAzureManaged
