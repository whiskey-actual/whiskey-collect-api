import sql, { Model, Sequelize } from 'sequelize'

export class DeviceAzure extends Model<any,any> {
    public DeviceAzureID!:                      number
    public AzureDeviceId!:                      string
    public AzureDisplayName!:                   string
    public AzureId!:                            string
    public AzureDeviceCategory!:                string
    public AzureDeviceMetadata!:                string
    public AzureDeviceOwnership!:               string
    public AzureDeviceVersion!:                 string
    public AzureDomainName!:                    string
    public AzureEnrollmentProfileType!:         string
    public AzureEnrollmentType!:                string
    public AzureExternalSourceName!:            string
    public AzureManagementType!:                string
    public AzureManufacturer!:                  string
    public AzureMDMAppId!:                      string
    public AzureModel!:                         string
    public AzureOperatingSystem!:               string
    public AzureOperatingSystemVersion!:        string
    public AzureProfileType!:                   string
    public AzureSourceType!:                    string
    public AzureTrustType!:                     string
    public AzureDeletedDateTime!:               Date
    public AzureApproximateLastSignInDateTime!: Date
    public AzureComplianceExpirationDateTime!:  Date
    public AzureCreatedDateTime!:               Date
    public AzureOnPremisesLastSyncDateTime!:    Date
    public AzureRegistrationDateTime!:          Date
    public AzureOnPremisesSyncEnabled!:         boolean
    public AzureAccountEnabled!:                boolean
    public AzureIsCompliant!:                   boolean
    public AzureIsManaged!:                     boolean
    public AzureIsRooted!:                      boolean
}

export function initDeviceAzure(sequelize:Sequelize) {

    DeviceAzure.init({
        DeviceAzureID:                         {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:false},
        AzureDeviceId:                         {type:sql.STRING, allowNull:false},
        AzureDisplayName:                      {type:sql.STRING},
        AzureId:                               {type:sql.STRING},
        AzureDeviceCategory:                   {type:sql.STRING},
        AzureDeviceMetadata:                   {type:sql.STRING},
        AzureDeviceOwnership:                  {type:sql.STRING},
        AzureDeviceVersion:                    {type:sql.STRING},
        AzureDomainName:                       {type:sql.STRING},
        AzureEnrollmentProfileType:            {type:sql.STRING},
        AzureEnrollmentType:                   {type:sql.STRING},
        AzureExternalSourceName:               {type:sql.STRING},
        AzureManagementType:                   {type:sql.STRING},
        AzureManufacturer:                     {type:sql.STRING},
        AzureMDMAppId:                         {type:sql.STRING},
        AzureModel:                            {type:sql.STRING},
        AzureOperatingSystem:                  {type:sql.STRING},
        AzureOperatingSystemVersion:           {type:sql.STRING},
        AzureProfileType:                      {type:sql.STRING},
        AzureSourceType:                       {type:sql.STRING},
        AzureTrustType:                        {type:sql.STRING},
        AzureDeletedDateTime:                  {type:sql.DATE},
        AzureApproximateLastSignInDateTime:    {type:sql.DATE},
        AzureComplianceExpirationDateTime:     {type:sql.DATE},
        AzureCreatedDateTime:                  {type:sql.DATE},
        AzureOnPremisesLastSyncDateTime:       {type:sql.DATE},
        AzureRegistrationDateTime:             {type:sql.DATE},
        AzureOnPremisesSyncEnabled:            {type:sql.BOOLEAN},
        AzureAccountEnabled:                   {type:sql.BOOLEAN},
        AzureIsCompliant:                      {type:sql.BOOLEAN},
        AzureIsManaged:                        {type:sql.BOOLEAN},
        AzureIsRooted:                         {type:sql.BOOLEAN},
    }, {
        sequelize,
        tableName: 'DeviceAzure'
    })

}
