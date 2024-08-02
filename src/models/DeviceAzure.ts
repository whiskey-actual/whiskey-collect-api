// import sql from 'sequelize'
// import {getDatabase} from '../config/db'
// import Device from './Device.old';

// const db = getDatabase()

// const DeviceAzure = db.define("DeviceAzure", {
//     DeviceAzureID:                          {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:false},
//     AzureDeviceId:                          {type:sql.STRING, allowNull:false},
//     AzureDisplayName:                       {type:sql.STRING},
//     AzureId:                                {type:sql.STRING},
//     AzureDeviceCategory:                    {type:sql.STRING},
//     AzureDeviceMetadata:                    {type:sql.STRING},
//     AzureDeviceOwnership:                   {type:sql.STRING},
//     AzureDeviceVersion:                     {type:sql.STRING},
//     AzureDomainName:                        {type:sql.STRING},
//     AzureEnrollmentProfileType:             {type:sql.STRING},
//     AzureEnrollmentType:                    {type:sql.STRING},
//     AzureExternalSourceName:                {type:sql.STRING},
//     AzureManagementType:                    {type:sql.STRING},
//     AzureManufacturer:                      {type:sql.STRING},
//     AzureMDMAppId:                          {type:sql.STRING},
//     AzureModel:                             {type:sql.STRING},
//     AzureOperatingSystem:                   {type:sql.STRING},
//     AzureOperatingSystemVersion:            {type:sql.STRING},
//     AzureProfileType:                       {type:sql.STRING},
//     AzureSourceType:                        {type:sql.STRING},
//     AzureTrustType:                         {type:sql.STRING},
//     AzureDeletedDateTime:                   {type:sql.DATE},
//     AzureApproximateLastSignInDateTime:     {type:sql.DATE},
//     AzureComplianceExpirationDateTime:      {type:sql.DATE},
//     AzureCreatedDateTime:                   {type:sql.DATE},
//     AzureOnPremisesLastSyncDateTime:        {type:sql.DATE},
//     AzureRegistrationDateTime:              {type:sql.DATE},
//     AzureOnPremisesSyncEnabled:             {type:sql.BOOLEAN},
//     AzureAccountEnabled:                    {type:sql.BOOLEAN},
//     AzureIsCompliant:                       {type:sql.BOOLEAN},
//     AzureIsManaged:                         {type:sql.BOOLEAN},
//     AzureIsRooted:                          {type:sql.BOOLEAN},
// },
// {
//     freezeTableName: true,
//     modelName: 'DeviceAzure',
//     initialAutoIncrement: '0'
// });

// DeviceAzure.upsert({DeviceAzureID:0, DeviceAzureDeviceId:'UNKNOWN'})


// DeviceAzure.belongsTo(Device, {foreignKey: {name:'DeviceID', allowNull:false, defaultValue:0}})

// export default DeviceAzure
