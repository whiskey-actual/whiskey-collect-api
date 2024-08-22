import sql, { Model, Sequelize } from 'sequelize'

export class DeviceAzureManaged extends Model<any,any> {
    public DeviceAzureManagedID!:                                   number
    public AzureManagedId!:                                         string
    public AzureManagedDeviceName!:                                 string
    public AzureManagedUserId!:                                     string
    public AzureManagedDeviceOwnerType!:                            string
    public AzureManagedOperatingSystem!:                            string
    public AzureManagedComplianceState!:                            string
    public AzureManagedJailBroken!:                                 string
    public AzureManagedManagementAgent!:                            string
    public AzureManagedOperatingSystemVersion!:                     string
    public AzureManagedEASDeviceID!:                                string
    public AzureManagedDeviceEnrollmentType!:                       string
    public AzureManagedActivationLockBypassCode!:                   string
    public AzureManagedEmailAddress!:                               string
    public AzureManagedAzureADDeviceID!:                            string
    public AzureManagedDeviceRegistrationState!:                    string
    public AzureManagedDeviceCategoryDisplayName!:                  string
    public AzureManagedExchangeAccessState!:                        string
    public AzureManagedExchangeAccessStateReason!:                  string
    public AzureManagedRemoteAssistanceSessionUrl!:                 string
    public AzureManagedRemoteAssistanceErrorDetails!:               string
    public AzureManagedUserPrincipalName!:                          string
    public AzureManagedModel!:                                      string
    public AzureManagedManufacturer!:                               string
    public AzureManagedIMEI!:                                       string
    public AzureManagedSerialNumber!:                               string
    public AzureManagedPhoneNumber!:                                string
    public AzureManagedAndroidSecurityPatchLevel!:                  string
    public AzureManagedUserDisplayName!:                            string
    public AzureManagedConfigurationManagerClientEnabedFeatures!:   string
    public AzureManagedWiFiMACAddress!:                             string
    public AzureManagedDeviceHealthAttestationState!:               string
    public AzureManagedSubscriberCarrier!:                          string
    public AzureManagedMEID!:                                       string
    public AzureManagedTotalStorageSpaceInBytes!:                   string
    public AzureManagedFreeStorageSpaceInBytes!:                    string
    public AzureManagedPartnerReportedThreatState!:                 string
    public AzureManagedRequireUserEnrollmentApproval!:              string
    public AzureManagedICCID!:                                      string
    public AzureManagedUDID!:                                       string
    public AzureManagedNotes!:                                      string
    public AzureManagedEthernetMacAddress!:                         string
    public AzureManagedPhysicalMemoryInBytes!:                      string
    public AzureManagedEnrolledDateTime!:                           Date
    public AzureManagedLastSyncDateTime!:                           Date
    public AzureManagedEASActivationDateTime!:                      Date
    public AzureManagedExchangeLastSuccessfulSyncDateTime!:         Date
    public AzureManagedComplianceGracePeriodExpirationDateTime!:    Date
    public AzureManagedManagementCertificateExpirationDateTime!:    Date
    public AzureManagedIsEASActivated!:                             boolean
    public AzureManagedIsAzureADRegistered!:                        boolean
    public AzureManagedIsSupervised!:                               boolean
    public AzureManagedIsEncrypted!:                                boolean
}

export function initDeviceAzureManaged(sequelize:Sequelize) {

    DeviceAzureManaged.init({
        DeviceAzureManagedID:                                   {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
        AzureManagedId:                                         {type:sql.STRING, allowNull:false, unique:true},
        AzureManagedDeviceName:                                 {type:sql.STRING},
        AzureManagedUserId:                                     {type:sql.STRING},
        AzureManagedDeviceOwnerType:                            {type:sql.STRING},
        AzureManagedOperatingSystem:                            {type:sql.STRING},
        AzureManagedComplianceState:                            {type:sql.STRING},
        AzureManagedJailBroken:                                 {type:sql.STRING},
        AzureManagedManagementAgent:                            {type:sql.STRING},
        AzureManagedOperatingSystemVersion:                     {type:sql.STRING},
        AzureManagedEASDeviceID:                                {type:sql.STRING},
        AzureManagedDeviceEnrollmentType:                       {type:sql.STRING},
        AzureManagedActivationLockBypassCode:                   {type:sql.STRING},
        AzureManagedEmailAddress:                               {type:sql.STRING},
        AzureManagedAzureADDeviceID:                            {type:sql.STRING},
        AzureManagedDeviceRegistrationState:                    {type:sql.STRING},
        AzureManagedDeviceCategoryDisplayName:                  {type:sql.STRING},
        AzureManagedExchangeAccessState:                        {type:sql.STRING},
        AzureManagedExchangeAccessStateReason:                  {type:sql.STRING},
        AzureManagedRemoteAssistanceSessionUrl:                 {type:sql.STRING},
        AzureManagedRemoteAssistanceErrorDetails:               {type:sql.STRING},
        AzureManagedUserPrincipalName:                          {type:sql.STRING},
        AzureManagedModel:                                      {type:sql.STRING},
        AzureManagedManufacturer:                               {type:sql.STRING},
        AzureManagedIMEI:                                       {type:sql.STRING},
        AzureManagedSerialNumber:                               {type:sql.STRING},
        AzureManagedPhoneNumber:                                {type:sql.STRING},
        AzureManagedAndroidSecurityPatchLevel:                  {type:sql.STRING},
        AzureManagedUserDisplayName:                            {type:sql.STRING},
        AzureManagedConfigurationManagerClientEnabedFeatures:   {type:sql.STRING},
        AzureManagedWiFiMACAddress:                             {type:sql.STRING},
        AzureManagedDeviceHealthAttestationState:               {type:sql.STRING},
        AzureManagedSubscriberCarrier:                          {type:sql.STRING},
        AzureManagedMEID:                                       {type:sql.STRING},
        AzureManagedTotalStorageSpaceInBytes:                   {type:sql.STRING},
        AzureManagedFreeStorageSpaceInBytes:                    {type:sql.STRING},
        AzureManagedPartnerReportedThreatState:                 {type:sql.STRING},
        AzureManagedRequireUserEnrollmentApproval:              {type:sql.STRING},
        AzureManagedICCID:                                      {type:sql.STRING},
        AzureManagedUDID:                                       {type:sql.STRING},
        AzureManagedNotes:                                      {type:sql.STRING},
        AzureManagedEthernetMacAddress:                         {type:sql.STRING},
        AzureManagedPhysicalMemoryInBytes:                      {type:sql.STRING},
        AzureManagedEnrolledDateTime:                           {type:sql.DATE},
        AzureManagedLastSyncDateTime:                           {type:sql.DATE},
        AzureManagedEASActivationDateTime:                      {type:sql.DATE},
        AzureManagedExchangeLastSuccessfulSyncDateTime:         {type:sql.DATE},
        AzureManagedComplianceGracePeriodExpirationDateTime:    {type:sql.DATE},
        AzureManagedManagementCertificateExpirationDateTime:    {type:sql.DATE},
        AzureManagedIsEASActivated:                             {type:sql.BOOLEAN},
        AzureManagedIsAzureADRegistered:                        {type:sql.BOOLEAN},
        AzureManagedIsSupervised:                               {type:sql.BOOLEAN},
        AzureManagedIsEncrypted:                                {type:sql.BOOLEAN},
    }, {
        sequelize,
        tableName: 'DeviceAzure'
    })
}