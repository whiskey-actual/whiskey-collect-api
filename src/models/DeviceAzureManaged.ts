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
    }, {
        sequelize,
        tableName: 'DeviceAzure'
    })
}