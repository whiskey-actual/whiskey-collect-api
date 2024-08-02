import { initializeDatabase, getDatabase } from './config/db';
import { LogEngine, LogEntryType } from "whiskey-log";
import activeDirectoryDevice from "./components/activeDirectoryDevice";
import { defineDeviceModel } from './models/Device'
  
export default class CollectorAPI {
    constructor(dbHost:string, dbName:string, dbUser:string, dbPass:string) {
        this.le = new LogEngine(["CollectorAPI"], false, 64)
        this.dbHost=dbHost
        this.dbName=dbName
        this.dbUser=dbUser
        this.dbPass=dbPass
    }
    private le:LogEngine 
    private dbHost:string
    private dbName:string
    private dbUser:string
    private dbPass:string

    public async initDb() {

        this.le.logStack.push("setupDb")

        this.le.AddLogEntry(LogEntryType.Info, "setting up db ..")

        initializeDatabase(this.le, this.dbHost, this.dbName, this.dbUser, this.dbPass, 'postgres');
        let db = getDatabase()
        
        // Define models
        const Device = defineDeviceModel(db);

        // Authenticate and sync the database
        db.authenticate()
        .then(() => {
            this.le.AddLogEntry(LogEntryType.Info, 'Connection has been established successfully.')
            return db.sync({force:true});
        })
        .then(() => {
            this.le.AddLogEntry(LogEntryType.Info, 'Database & tables created!')
        })
        .catch(err => {
            this.le.AddLogEntry(LogEntryType.Error, err)
        }).finally(() => {
            this.le.AddLogEntry(LogEntryType.Info, ".. db setup complete.")
        })

        
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