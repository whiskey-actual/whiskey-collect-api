// import sql from 'sequelize'
// import {getDatabase} from '../config/db'
// import OperatingSystem from './OperatingSystem';
// import DeviceActiveDirectory from './DeviceActiveDirectory';
// import DeviceAzureManaged from './DeviceAzureManaged';
// import DeviceConnectwise from './DeviceConnectwise';
// import DeviceCrowdstrike from './DeviceCrowdstrike';
// import DeviceAzure from './DeviceAzure';

// const db = getDatabase()

// const Device = db.define("Device", {
//     DeviceID:           {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
//     DeviceName:         {type:sql.STRING, allowNull:false, unique:true},
//     DeviceFQDN:         {type:sql.STRING, unique:true},
//     DeviceIP:           {type:sql.STRING},

//     // datetimes
//     DeviceFirstSeen:    {type:sql.DATE, allowNull:false, defaultValue:new Date()},
//     DeviceLastSeen:     {type:sql.DATE, allowNull:false, defaultValue:new Date()},

//     // OperatingSystem
//     DeviceOperatingSystem:  {type:sql.INTEGER, allowNull:false, defaultValue:0},

//     // Active Directory
// 	DeviceActiveDirectoryID:    {type:sql.INTEGER, allowNull:false, defaultValue:0},

//     // AzureActiveDirectory
//     DeviceAzureID:              {type:sql.INTEGER, allowNull:false, defaultValue:0},
    
//     //AzureManagedDevice
//     DeviceAzureManagedID:       {type:sql.INTEGER, allowNull:false, defaultValue:0},
    
//     // connectwise
//     DeviceConnectwiseID:        {type:sql.INTEGER, allowNull:false, defaultValue:0},

//     //  crowdstrike
//     DeviceCrowdstrikeID:        {type:sql.INTEGER, allowNull:false, defaultValue:0}

// },
// {
//     freezeTableName: true,
//     modelName: 'Device',
//     initialAutoIncrement: '0'
// });

// Device.upsert({DeviceID:0, DeviceName:'UNKNOWN'})

// Device.belongsTo(OperatingSystem, {foreignKey: {name:'OperatingSystemID', allowNull:false, defaultValue:0}})

// Device.belongsTo(DeviceActiveDirectory, {foreignKey: {name:'DeviceActiveDirectoryID', allowNull:false, defaultValue:0}})
// Device.belongsTo(DeviceAzure, {foreignKey: {name:'DeviceAzureID', allowNull:false, defaultValue:0}})
// Device.belongsTo(DeviceAzureManaged, {foreignKey: {name:'DeviceAzureManagedID', allowNull:false, defaultValue:0}})
// Device.belongsTo(DeviceConnectwise, {foreignKey: {name:'DeviceConnectwiseID', allowNull:false, defaultValue:0}})
// Device.belongsTo(DeviceCrowdstrike, {foreignKey: {name:'DeviceCrowdstrikeID', allowNull:false, defaultValue:0}})

// export default Device