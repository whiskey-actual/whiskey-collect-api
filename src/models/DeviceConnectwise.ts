import sql from 'sequelize'
import {getDatabase} from '../config/db'
import Device from './Device';

const db = getDatabase()

const DeviceConnectwise = db.define("DeviceConnecwise", {
    DeviceConnectwiseID:                {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:false},
    ConnectwiseId:                      {type:sql.STRING, allowNull:false},  // string;
    ConnectwiseType:                    {type:sql.STRING},  // string|undefined;
    ConnectwiseLocation:                {type:sql.STRING},  // string|undefined;
    ConnectwiseClient:                  {type:sql.STRING},  // string|undefined;
    ConnectwiseOperatingSystem:         {type:sql.STRING},  // string|undefined;
    ConnectwiseOperatingSystemVersion:  {type:sql.STRING},  // string|undefined;
    ConnectwiseDomainName:              {type:sql.STRING},  // string|undefined;
    ConnectwiseAgentVersion:            {type:sql.STRING},  // string|undefined;
    ConnectwiseComment:                 {type:sql.STRING},  // string|undefined;
    ConnectwiseIpAddress:               {type:sql.STRING},  // string|undefined;
    ConnectwiseMacAddress:              {type:sql.STRING},  // string|undefined;
    ConnectwiseLastUserName:            {type:sql.STRING},  // string|undefined;
    ConnectwiseStatus:                  {type:sql.STRING},  // string|undefined;
    ConnectwiseSerialNumber:            {type:sql.STRING},  // string|undefined;
    ConnectwiseBiosManufacturer:        {type:sql.STRING},  // string|undefined;
    ConnectwiseModel:                   {type:sql.STRING},  // string|undefined;
    ConnectwiseDescription:             {type:sql.STRING},  // string|undefined;
    ConnectwiseTotalMemory:             {type:sql.NUMBER},  // Number|undefined;
    ConnectwiseFreeMemory:              {type:sql.NUMBER},  // Number|undefined;
    ConnectwiseLastObserved:            {type:sql.DATE},  // Date|undefined;
    ConnectwiseFirstSeen:               {type:sql.DATE},  // Date|undefined;
    ConnectwiseWindowsUpdateDate:       {type:sql.DATE},  // Date|undefined;
    ConnectwiseAntivirusDefinitionDate: {type:sql.DATE},  // Date|undefined;
},
{
    freezeTableName: true,
    modelName: 'DeviceConnectwise',
    initialAutoIncrement: '0'
});

DeviceConnectwise.upsert({DeviceConnectwiseID:0, DeviceConnectwiseId:'UNKNOWN'})


DeviceConnectwise.belongsTo(Device, {foreignKey: {name:'DeviceID', allowNull:false, defaultValue:0}})

export default DeviceConnectwise
