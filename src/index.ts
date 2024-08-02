import { initializeDatabase, getDatabase } from './config/db';
import { LogEngine, LogEntryType } from "whiskey-log";
import activeDirectoryDevice from "./components/activeDirectoryDevice";
import { defineDeviceModel } from './models/Device'
  
export default class CollectorAPI {
    constructor(dbHost:string, dbName:string, dbUser:string, dbPass:string, dbShowLog:boolean=false) {
        this.le = new LogEngine(["CollectorAPI"], false, 64)
        this.dbHost=dbHost
        this.dbName=dbName
        this.dbUser=dbUser
        this.dbPass=dbPass
        this.dbShowLog = dbShowLog
    }
    private le:LogEngine 
    private dbHost:string
    private dbName:string
    private dbUser:string
    private dbPass:string
    private dbShowLog:boolean

    public async initDb() {

        this.le.logStack.push("setupDb")

        this.le.AddLogEntry(LogEntryType.Info, "setting up db ..")

        initializeDatabase(this.le, this.dbHost, this.dbName, this.dbUser, this.dbPass, this.dbShowLog);
        
        // Authenticate and sync the database
        await getDatabase().authenticate()
        .then(() => {
            this.le.AddLogEntry(LogEntryType.Success, '.. connected to db.')
            let db = getDatabase()
            db.sync({force:true})
            .then((db) => {
                // Define models
                const Device = defineDeviceModel(this.le, db);
                this.le.AddLogEntry(LogEntryType.Success, '.. db models complete.')
            })
            .catch(err => {
                this.le.AddLogEntry(LogEntryType.Error, err.toString())
                throw new Error(err)
            })
        })
        .catch(err => {
            this.le.AddLogEntry(LogEntryType.Error, err.toString())
            throw new Error(err)
        })
            
        this.le.AddLogEntry(LogEntryType.Info, ".. db setup complete.")
        

        
    }

    public async addActiveDirectoryDeviceData(data:any) {
        this.le.AddDelimiter("Active Directory Device Data")
        try {
            this.le.AddLogEntry(LogEntryType.Info, "parsing AD device data ..")
            await activeDirectoryDevice(this.le, data)
            this.le.AddLogEntry(LogEntryType.Info, ".. finished parsing AD device data.")
        } catch(err:any) {
            this.le.AddLogEntry(LogEntryType.Error, err)
        }
        
    }

}