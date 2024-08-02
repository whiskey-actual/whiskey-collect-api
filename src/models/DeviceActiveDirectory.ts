import sql, { Model, ModelStatic, Sequelize } from 'sequelize'
import { LogEngine, LogEntryType } from 'whiskey-log';
import { Device } from './Device';

export class DeviceActiveDirectory extends Model {}


export const defineDeviceActiveDirectory = (le:LogEngine, sequelize:Sequelize):ModelStatic<DeviceActiveDirectory> => {

    le.AddLogEntry(LogEntryType.Add, "device model")

    DeviceActiveDirectory.init({
        DeviceActiveDirectoryID:                {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
        DeviceID:                               {type:sql.INTEGER, allowNull:false, unique:true},
        ActiveDirectoryDN:                      {type:sql.STRING, allowNull:false, unique:true},
        ActiveDirectoryOperatingSystem:         {type:sql.STRING},
        ActiveDirectoryOperatingSystemVersion:  {type:sql.STRING},
        ActiveDirectoryDNSHostName:             {type:sql.STRING},
        ActiveDirectoryLogonCount:              {type:sql.INTEGER},
        ActiveDirectoryWhenCreated:             {type:sql.DATE},
        ActiveDirectoryWhenChanged:             {type:sql.DATE},
        ActiveDirectoryLastLogon:               {type:sql.DATE},
        ActiveDirectoryPwdLastSet:              {type:sql.DATE},
        ActiveDirectoryLastLogonTimestamp:      {type:sql.DATE}
    },
    {
        modelName: 'DeviceActiveDirectory',
        sequelize,
        freezeTableName: true,
        initialAutoIncrement: '0'
    });

    DeviceActiveDirectory.upsert({DeviceActiveDirectoryID:0, ActiveDirectoryDN:'UNKNOWN'})
    DeviceActiveDirectory.belongsTo(Device)

    return DeviceActiveDirectory
    
}
    



export default DeviceActiveDirectory
