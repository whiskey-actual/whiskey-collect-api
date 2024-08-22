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
        DeviceCrowdstrikeID:                                    {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
        CrowdstrikeDeviceId:                                    {type:sql.STRING, allowNull:false, unique:true},
        CrowdstrikeCID:                                         {type:sql.STRING},
        CrowdstrikeAgentVersion:                                {type:sql.STRING},
        CrowdstrikeBIOSManufacturer:                            {type:sql.STRING},
        CrowdstrikeBIOSVersion:                                 {type:sql.STRING},
        CrowdstrikeExternalIP:                                  {type:sql.STRING},
        CrowdstrikeMACAddress:                                  {type:sql.STRING},
        CrowdstrikeLocalIP:                                     {type:sql.STRING},
        CrowdstrikeMachineDomain:                               {type:sql.STRING},
        CrowdstrikeMajorVersion:                                {type:sql.STRING},
        CrowdstrikeMinorVersion:                                {type:sql.STRING},
        CrowdstrikeOSVersion:                                   {type:sql.STRING},
        CrowdstrikeOSBuild:                                     {type:sql.STRING},
        CrowdstrikePlatformName:                                {type:sql.STRING},
        CrowdstrikeReducedFunctionalityMode:                    {type:sql.STRING},
        CrowdstrikeProductTypeDesc:                             {type:sql.STRING},
        CrowdstrikeProvisionStatus:                             {type:sql.STRING},
        CrowdstrikeSerialNumber:                                {type:sql.STRING},
        CrowdstrikeServicePackMajor:                            {type:sql.STRING},
        CrowdstrikeServicePackMinor:                            {type:sql.STRING},
        CrowdstrikeStatus:                                      {type:sql.STRING},
        CrowdstrikeSystemManufacturer:                          {type:sql.STRING},
        CrowdstrikeSystemProductName:                           {type:sql.STRING},
        CrowdstrikeKernelVersion:                               {type:sql.STRING},
        CrowdstrikeFirstSeenDateTime:                           {type:sql.DATE},
        CrowdstrikeLastSeenDateTime:                            {type:sql.DATE},
        CrowdstrikeModifiedDateTime:                            {type:sql.DATE},
    },
    {
        sequelize,
        tableName: 'DeviceCrowdstrike'
    })
}