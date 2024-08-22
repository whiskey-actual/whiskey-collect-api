import sql, { Model, Sequelize } from 'sequelize'

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
        DeviceOperatingSystem:      {type:sql.INTEGER},
    
        // Active Directory
        DeviceActiveDirectoryID:    {type:sql.INTEGER},
    
        // AzureActiveDirectory
        DeviceAzureID:              {type:sql.INTEGER},
        
        //AzureManagedDevice
        DeviceAzureManagedID:       {type:sql.INTEGER},
        
        // connectwise
        DeviceConnectwiseID:        {type:sql.INTEGER},
    
        //  crowdstrike
        DeviceCrowdstrikeID:        {type:sql.INTEGER}
    }, {
        sequelize,
        tableName: 'Device'
    })

}