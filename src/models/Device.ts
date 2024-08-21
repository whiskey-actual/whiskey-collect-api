import sql, { Model, Sequelize } from 'sequelize'
import { DeviceActiveDirectory } from './DeviceActiveDirectory'
//import OperatingSystem from './OperatingSystem';
//import DeviceActiveDirectory from './DeviceActiveDirectory';
//import DeviceAzureManaged from './DeviceAzureManaged';
//import DeviceConnectwise from './DeviceConnectwise';
//import DeviceCrowdstrike from './DeviceCrowdstrike';
//import DeviceAzure from './DeviceAzure';


export class Device extends Model<any,any> {
    public DeviceID!: number
    public DeviceName!: string
    public DeviceFQDN!: string
    public DeviceIP!: string
    public DeviceFirstSeen!: Date
    public DeviceLastSeen!: Date
    public DeviceOperatingSystem!: number
    public DeviceActiveDirectoryID!: number
    public DeviceAzureID!: number
    public DeviceAzureManagedID!: number
    public DeviceConnectwiseID!: number
    public DeviceCrowdstrikeID!: number
}

export function initDevice(sequelize:Sequelize) {

    Device.init({
        DeviceID:                   {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
        DeviceName:                 {type:sql.STRING, allowNull:false, unique:true},
        DeviceFQDN:                 {type:sql.STRING, unique:true},
        DeviceIP:                   {type:sql.STRING},
    
        // datetimes
        DeviceFirstSeen:            {type:sql.DATE, allowNull:false, defaultValue:new Date()},
        DeviceLastSeen:             {type:sql.DATE, allowNull:false, defaultValue:new Date()},
    
        // OperatingSystem
        DeviceOperatingSystem:      {type:sql.INTEGER, allowNull:false, defaultValue:0},
    
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
    }, {
        sequelize,
        tableName: 'Device'
    })

    Device.upsert({DeviceID:0, DeviceName:'UNKNOWN'})
    Device.belongsTo(DeviceActiveDirectory, {as:'DeviceActiveDirectory', foreignKey:'DeviceActiveDirectoryID'})

//Device.belongsTo(OperatingSystem, {foreignKey: {name:'OperatingSystemID', allowNull:false, defaultValue:0}})


// Device.belongsTo(DeviceAzure, {foreignKey: {name:'DeviceAzureID', allowNull:false, defaultValue:0}})
// Device.belongsTo(DeviceAzureManaged, {foreignKey: {name:'DeviceAzureManagedID', allowNull:false, defaultValue:0}})
// Device.belongsTo(DeviceConnectwise, {foreignKey: {name:'DeviceConnectwiseID', allowNull:false, defaultValue:0}})
// Device.belongsTo(DeviceCrowdstrike, {foreignKey: {name:'DeviceCrowdstrikeID', allowNull:false, defaultValue:0}})

}