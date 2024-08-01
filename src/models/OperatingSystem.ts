import sql from 'sequelize'
import {getDatabase} from '../config/db'

const db = getDatabase()

const OperatingSystem = db.define("OperatingSystem", {
    OperatingSystemID:      {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
    OperatingSystemName:    {type:sql.STRING, allowNull:false, unique:true},

    // datetimes
    OperatingSystemFirstSeen:    {type:sql.DATE, allowNull:false, defaultValue:new Date()},
    OperatingSystemLastSeen:     {type:sql.DATE, allowNull:false, defaultValue:new Date()},
},
{
    freezeTableName: true,
    modelName: 'OperatingSystem',
    initialAutoIncrement: '0'
});

OperatingSystem.upsert({OperatingSystemID:0, OperatingSystemName:'UNKNOWN'})

export default OperatingSystem