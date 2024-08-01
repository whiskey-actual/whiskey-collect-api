import sql from 'sequelize'
import {getDatabase} from '../config/db'
import Device from './Device';

const db = getDatabase()

const DeviceCrowdstrike = db.define("DeviceCrowdstrike", {
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
    freezeTableName: true,
    modelName: 'DeviceCrowdstrike',
    initialAutoIncrement: '0'
});

DeviceCrowdstrike.upsert({DeviceCrowdstrikeID:0, CrowdstrikeDeviceId:'UNKNOWN'})

DeviceCrowdstrike.belongsTo(Device, {foreignKey: {name:'DeviceID', allowNull:false, defaultValue:0}})

export default DeviceCrowdstrike
