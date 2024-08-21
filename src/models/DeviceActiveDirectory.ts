import sql, { Model, Sequelize } from 'sequelize'
//import {Device} from './Device';

export class DeviceActiveDirectory extends Model<any,any> {
    public DeviceActiveDirectoryID!:                number
    public DeviceID!:                               number
    public ActiveDirectoryDN!:                      string
    public ActiveDirectoryOperatingSystem!:         string
    public ActiveDirectoryOperatingSystemVersion!:  string
    public ActiveDirectoryDNSHostName!:             string
    public ActiveDirectoryLogonCount!:              number
    public ActiveDirectoryWhenCreated!:             Date
    public ActiveDirectoryWhenChanged!:             Date
    public ActiveDirectoryLastLogon!:               Date
    public ActiveDirectoryPwdLastSet!:              Date
    public ActiveDirectoryLastLogonTimestamp!:      Date
}


export function initDeviceActiveDirectory(sequelize:Sequelize) {

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
    }, {
        sequelize,
        tableName: 'DeviceActiveDirectory',
    })

    //DeviceActiveDirectory.upsert({DeviceActiveDirectoryID:0, ActiveDirectoryDN:'UNKNOWN'})

}
   



//DeviceActiveDirectory.belongsTo(Device, {as:'Device', foreignKey:'DeviceID'})

//DeviceActiveDirectory.belongsTo(Device, {foreignKey:{name:'DeviceID', allowNull:false}})
