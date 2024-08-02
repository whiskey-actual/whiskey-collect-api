import sql, { Model, ModelStatic, Sequelize } from 'sequelize'
// import OperatingSystem from './OperatingSystem';
import DeviceActiveDirectory from './DeviceActiveDirectory';
// import DeviceAzureManaged from './DeviceAzureManaged';
// import DeviceConnectwise from './DeviceConnectwise';
// import DeviceCrowdstrike from './DeviceCrowdstrike';
// import DeviceAzure from './DeviceAzure';

export class Device extends Model {
    public DeviceID!:number
    public DeviceName!:string
    public DeviceFQDN?:string
    public DeviceIP?:string
    public DeviceFirstSeen?:Date
    public DeviceLastSeen?:Date
    public DeviceOperatingSystemID?:number
    public DeviceActiveDirectoryID?:number
    public DeviceAzureID?:number
    public DeviceAzureManagedID?:number
    public DeviceConnectwiseID?:number
    public DeviceCrowdstrikeID?:number
}

export const defineDeviceModel = (sequelize: Sequelize):ModelStatic<Device> => {

  
    Device.init({
        DeviceID:           {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
        DeviceName:         {type:sql.STRING, allowNull:false, unique:true},
        DeviceFQDN:         {type:sql.STRING, unique:true},
        DeviceIP:           {type:sql.STRING},

        // datetimes
        DeviceFirstSeen:    {type:sql.DATE, allowNull:false, defaultValue:new Date()},
        DeviceLastSeen:     {type:sql.DATE, allowNull:false, defaultValue:new Date()},

        // OperatingSystem
        DeviceOperatingSystem:  {type:sql.INTEGER, allowNull:false, defaultValue:0},

        // Active Directory
        DeviceActiveDirectoryID:    {type:sql.INTEGER, allowNull:false, defaultValue:0},

        // AzureActiveDirectory
        DeviceAzureID:              {type:sql.INTEGER, allowNull:false, defaultValue:0},
        
        //AzureManagedDevice
        DeviceAzureManagedID:       {type:sql.INTEGER, allowNull:false, defaultValue:0},
        
        // connectwise
        DeviceConnectwiseID:        {type:sql.INTEGER, allowNull:false, defaultValue:0},

        //  crowdstrike
        DeviceCrowdstrikeID:        {type:sql.INTEGER, allowNull:false, defaultValue:0}
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'Device',
        initialAutoIncrement: '0'
    });

    Device.upsert({DeviceID:0, DeviceName:'UNKNOWN'})

    // Device.belongsTo(OperatingSystem, {foreignKey: {name:'OperatingSystemID', allowNull:false, defaultValue:0}})
    Device.belongsTo(DeviceActiveDirectory, {foreignKey: {name:'DeviceActiveDirectoryID', allowNull:false, defaultValue:0}})
    // Device.belongsTo(DeviceAzure, {foreignKey: {name:'DeviceAzureID', allowNull:false, defaultValue:0}})
    // Device.belongsTo(DeviceAzureManaged, {foreignKey: {name:'DeviceAzureManagedID', allowNull:false, defaultValue:0}})
    // Device.belongsTo(DeviceConnectwise, {foreignKey: {name:'DeviceConnectwiseID', allowNull:false, defaultValue:0}})
    // Device.belongsTo(DeviceCrowdstrike, {foreignKey: {name:'DeviceCrowdstrikeID', allowNull:false, defaultValue:0}})

    return Device;
};