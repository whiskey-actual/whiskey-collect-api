import sql, { Model, Sequelize } from 'sequelize'

export class DeviceCrowdstrike extends Model<any,any> {
    DeviceCrowdstrikeID!:                   number
    CrowdstrikeDeviceId!:                   string
    CrowdstrikeCID!:                        string
    CrowdstrikeAgentVersion!:               string
    CrowdstrikeBIOSManufacturer!:           string
    CrowdstrikeBIOSVersion!:                string
    CrowdstrikeExternalIP!:                 string
    CrowdstrikeMACAddress!:                 string
    CrowdstrikeLocalIP!:                    string
    CrowdstrikeMachineDomain!:              string
    CrowdstrikeMajorVersion!:               string
    CrowdstrikeMinorVersion!:               string
    CrowdstrikeOSVersion!:                  string
    CrowdstrikeOSBuild!:                    string
    CrowdstrikePlatformName!:               string
    CrowdstrikeReducedFunctionalityMode!:   string
    CrowdstrikeProductTypeDesc!:            string
    CrowdstrikeProvisionStatus!:            string
    CrowdstrikeSerialNumber!:               string
    CrowdstrikeServicePackMajor!:           string
    CrowdstrikeServicePackMinor!:           string
    CrowdstrikeStatus!:                     string
    CrowdstrikeSystemManufacturer!:         string
    CrowdstrikeSystemProductName!:          string
    CrowdstrikeKernelVersion!:              string
    CrowdstrikeFirstSeenDateTime!:          Date
    CrowdstrikeLastSeenDateTime!:           Date
    CrowdstrikeModifiedDateTime!:           Date
}

export function initDeviceCrowdstrike(sequelize:Sequelize) {
    DeviceCrowdstrike.init({
        DeviceCrowdstrikeID:                                    {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:false},
        CrowdstrikeDeviceId:                                    {type:sql.STRING, allowNull:false},   // string;
        CrowdstrikeCID:                                         {type:sql.STRING},   // string|undefined;
        CrowdstrikeAgentVersion:                                {type:sql.STRING},   // string|undefined;
        CrowdstrikeBIOSManufacturer:                            {type:sql.STRING},   // string|undefined;
        CrowdstrikeBIOSVersion:                                 {type:sql.STRING},   // string|undefined;
        CrowdstrikeExternalIP:                                  {type:sql.STRING},   // string|undefined;
        CrowdstrikeMACAddress:                                  {type:sql.STRING},   // string|undefined;
        CrowdstrikeLocalIP:                                     {type:sql.STRING},   // string|undefined;
        CrowdstrikeMachineDomain:                               {type:sql.STRING},   // string|undefined;
        CrowdstrikeMajorVersion:                                {type:sql.STRING},   // string|undefined;
        CrowdstrikeMinorVersion:                                {type:sql.STRING},   // string|undefined;
        CrowdstrikeOSVersion:                                   {type:sql.STRING},   // string|undefined;
        CrowdstrikeOSBuild:                                     {type:sql.STRING},   // string|undefined;
        CrowdstrikePlatformName:                                {type:sql.STRING},   // string|undefined;
        CrowdstrikeReducedFunctionalityMode:                    {type:sql.STRING},   // string|undefined;
        CrowdstrikeProductTypeDesc:                             {type:sql.STRING},   // string|undefined;
        CrowdstrikeProvisionStatus:                             {type:sql.STRING},   // string|undefined;
        CrowdstrikeSerialNumber:                                {type:sql.STRING},   // string|undefined;
        CrowdstrikeServicePackMajor:                            {type:sql.STRING},   // string|undefined;
        CrowdstrikeServicePackMinor:                            {type:sql.STRING},   // string|undefined;
        CrowdstrikeStatus:                                      {type:sql.STRING},   // string|undefined;
        CrowdstrikeSystemManufacturer:                          {type:sql.STRING},   // string|undefined;
        CrowdstrikeSystemProductName:                           {type:sql.STRING},   // string|undefined;
        CrowdstrikeKernelVersion:                               {type:sql.STRING},   // string|undefined;
        CrowdstrikeFirstSeenDateTime:                           {type:sql.DATE},   // Date|undefined;
        CrowdstrikeLastSeenDateTime:                            {type:sql.DATE},   // Date|undefined;
        CrowdstrikeModifiedDateTime:                            {type:sql.DATE},   // Date|undefined;    
    },
    {
        sequelize,
        tableName: 'DeviceAzure'
    })
}