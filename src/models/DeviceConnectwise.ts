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
        sequelize,
        tableName: 'DeviceAzure'
    })
}

export default DeviceConnectwise
