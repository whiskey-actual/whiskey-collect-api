import sql from 'sequelize'
import {getDatabase} from '../config/db'

const db = getDatabase()

const DataSource = db.define("DataSource", {
    DataSourceID:           {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
    DataSourceDescription:  {type:sql.INTEGER, allowNull:false},
    SourceURI:              {type:sql.STRING},
    SourceCredential:       {type:sql.STRING},
    SourceAuthentication:   {type:sql.STRING},
    SourceParameter:        {type:sql.STRING},
    SourcePort:             {type:sql.INTEGER},

},
{
    freezeTableName: true,
    modelName: 'DataSource',
    initialAutoIncrement: '0'
});

export default DataSource


