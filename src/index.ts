import { LogEngine, LogEntryType } from "whiskey-log";
import activeDirectoryDevice from "./components/activeDirectoryDevice";
import sql, { ModelStatic, Sequelize } from 'sequelize';
import config from './config';
import le from "./config/le";
//import DeviceActiveDirectory from "./models/DeviceActiveDirectory";
import { initModels } from "./models";
  
export default class CollectorAPI {


    constructor(dbHost:string, dbName:string, dbUser:string, dbPass:string, dbShowLog:boolean=false) {
        le.AddLogEntry(LogEntryType.Warning, "init db: " + dbUser + "@" + dbHost + "::" + dbName)
        
        this.sequelize = new Sequelize(dbName, dbUser, dbPass, {
            host: dbHost,
            dialect: 'postgres',
            logging: dbShowLog ? (...msg) => console.log(msg) : false,
            //operatorsAliases: {},
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });
    
    };

    private sequelize:Sequelize
    public models:ModelStatic<sql.Model<any,any>>[] =[]


  // Asynchronous method to initialize the connection and models
  async initialize(): Promise<void> {
    try {
      // Step 1: Authenticate the connection
      await this.sequelize.authenticate();
      console.log('Connection has been established successfully.');

      // Step 2: Define models
      initModels(this.sequelize)

      // Step 3: Sync models with the database
      await this.sequelize.sync({force:true});
      console.log('All models were synchronized successfully.');

    } catch (error) {
      console.error('Unable to connect to the database:', error);
      throw error;
    }
  }

  getModels() {
    return this.models
  }

}