import sql from 'sequelize'
import Device from './Device';

import config from '../config';

const DeviceActiveDirectory = config.db.db.define("DeviceActiveDirectory", {
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
        freezeTableName: true,
        //modelName: 'Device',
        initialAutoIncrement: '0'
    
    });

DeviceActiveDirectory.upsert({DeviceActiveDirectoryID:0, ActiveDirectoryDN:'UNKNOWN'})
DeviceActiveDirectory.belongsTo(Device, {foreignKey:{name:'DeviceID', allowNull:false}})

export default DeviceActiveDirectory
