import { initializeDatabase, getDatabase } from './config/db';
import { LogEngine, LogEntryType } from "whiskey-log";
import activeDirectoryDevice from "./components/activeDirectoryDevice";
import { defineDeviceModel } from './models/Device'
import { Sequelize } from 'sequelize';
  
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

    private initDb = async() => {
        this.le.AddLogEntry(LogEntryType.Info, "initializing db connection ..")
        initializeDatabase(this.le, this.dbHost, this.dbName, this.dbUser, this.dbPass, this.dbShowLog);
        this.le.AddLogEntry(LogEntryType.Info, ".. db connection initialized.")
        return await getDatabase()
    }

    private syncDb = async (db:Sequelize) => {
        this.le.AddLogEntry(LogEntryType.Info, "syncing db ..")
        await db.sync({force:true})
        this.le.AddLogEntry(LogEntryType.Info, "db sync complete ..")
    }

    private buildModels = async(db:Sequelize) => {
        this.le.AddLogEntry(LogEntryType.Info, "building models ..")
        const Device = defineDeviceModel(this.le, db);
        this.le.AddLogEntry(LogEntryType.Success, '.. db models complete.')
    }

    public async createDb() {

        this.le.logStack.push("createDb")
        this.le.AddLogEntry(LogEntryType.Info, "creating db ..")

        const db = await this.initDb()

        await this.syncDb(db)

        await this.buildModels(db)
            
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