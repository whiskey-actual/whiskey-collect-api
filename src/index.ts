import { LogEngine, LogEntryType } from "whiskey-log";
import activeDirectoryDevice from "./components/activeDirectoryDevice";
import { Sequelize } from 'sequelize';
import config from './config';
  
export default class CollectorAPI {
    
    public async initdb(dbHost:string, dbName:string, dbUser:string, dbPass:string, dbShowLog:boolean=false) {
        await config.db.initializeDatabase(dbHost, dbName, dbUser, dbPass, dbShowLog);
    }


    public async addActiveDirectoryDeviceData(data:any) {
        config.le.AddDelimiter("Active Directory Device Data")
        try {
            config.le.AddLogEntry(LogEntryType.Info, "parsing AD device data ..")
            await activeDirectoryDevice(data)
            config.le.AddLogEntry(LogEntryType.Info, ".. finished parsing AD device data.")
        } catch(err:any) {
            config.le.AddLogEntry(LogEntryType.Error, err)
        }
        
    }

}