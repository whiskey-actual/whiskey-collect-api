import sql, { Model, Sequelize } from 'sequelize'

export class DeviceConnectwise extends Model<any,any> {
    DeviceConnectwiseID!:                   number
    ConnectwiseId!:                         string
    ConnectwiseType!:                       string
    ConnectwiseLocation!:                   string
    ConnectwiseClient!:                     string
    ConnectwiseOperatingSystem!:            string
    ConnectwiseOperatingSystemVersion!:     string
    ConnectwiseDomainName!:                 string
    ConnectwiseAgentVersion!:               string
    ConnectwiseComment!:                    string
    ConnectwiseIpAddress!:                  string
    ConnectwiseMacAddress!:                 string
    ConnectwiseLastUserName!:               string
    ConnectwiseStatus!:                     string
    ConnectwiseSerialNumber!:               string
    ConnectwiseBiosManufacturer!:           string
    ConnectwiseModel!:                      string
    ConnectwiseDescription!:                string
    ConnectwiseTotalMemory!:                number
    ConnectwiseFreeMemory!:                 number
    ConnectwiseLastObserved!:               Date
    ConnectwiseFirstSeen!:                  Date
    ConnectwiseWindowsUpdateDate!:          Date
    ConnectwiseAntivirusDefinitionDate!:    Date
}

export function initDeviceConnectwise(sequelize:Sequelize) {
    DeviceConnectwise.init({
        DeviceConnectwiseID:                {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
        ConnectwiseId:                      {type:sql.STRING, allowNull:false, unique:true},
        ConnectwiseType:                    {type:sql.STRING},
        ConnectwiseLocation:                {type:sql.STRING},
        ConnectwiseClient:                  {type:sql.STRING},
        ConnectwiseOperatingSystem:         {type:sql.STRING},
        ConnectwiseOperatingSystemVersion:  {type:sql.STRING},
        ConnectwiseDomainName:              {type:sql.STRING},
        ConnectwiseAgentVersion:            {type:sql.STRING},
        ConnectwiseComment:                 {type:sql.STRING},
        ConnectwiseIpAddress:               {type:sql.STRING},
        ConnectwiseMacAddress:              {type:sql.STRING},
        ConnectwiseLastUserName:            {type:sql.STRING},
        ConnectwiseStatus:                  {type:sql.STRING},
        ConnectwiseSerialNumber:            {type:sql.STRING},
        ConnectwiseBiosManufacturer:        {type:sql.STRING},
        ConnectwiseModel:                   {type:sql.STRING},
        ConnectwiseDescription:             {type:sql.STRING},
        ConnectwiseTotalMemory:             {type:sql.NUMBER},
        ConnectwiseFreeMemory:              {type:sql.NUMBER},
        ConnectwiseLastObserved:            {type:sql.DATE},
        ConnectwiseFirstSeen:               {type:sql.DATE},
        ConnectwiseWindowsUpdateDate:       {type:sql.DATE},
        ConnectwiseAntivirusDefinitionDate: {type:sql.DATE},
    },
    {
        sequelize,
        tableName: 'DeviceAzure'
    })
}

export default DeviceConnectwise
