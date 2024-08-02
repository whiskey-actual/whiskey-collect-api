import sql, { Model, ModelStatic, Sequelize } from 'sequelize'
import { Device } from './Device';

export class DeviceActiveDirectory extends Model {
    public DeviceActiveDirectoryID!:number
    public DeviceID!:number
    public ActiveDirectoryDN?:string
    public ActiveDirectoryOperatingSystem?:string
    public ActiveDirectoryOperatingSystemVersion?:string
    public ActiveDirectoryDNSHostName?:string
    public ActiveDirectoryLogonCount?:number
    public ActiveDirectoryWhenCreated?:Date
    public ActiveDirectoryWhenChanged?:Date
    public ActiveDirectoryLastLogon?:Date
    public ActiveDirectoryPwdLastSet?:Date
    public ActiveDirectoryLastLogonTimestamp?:Date
}


export const defineDeviceActiveDirectory = (sequelize: Sequelize):ModelStatic<DeviceActiveDirectory> => {

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
        sequelize,
        freezeTableName: true,
        modelName: 'DeviceActiveDirectory',
        initialAutoIncrement: '0'
    });

    DeviceActiveDirectory.upsert({DeviceActiveDirectoryID:0, ActiveDirectoryDN:'UNKNOWN'})
    DeviceActiveDirectory.belongsTo(Device, {foreignKey: {name:'DeviceID', allowNull:false, defaultValue:0}})

    return DeviceActiveDirectory
    
}
    



export default DeviceActiveDirectory
