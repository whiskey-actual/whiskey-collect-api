import { Sequelize } from "sequelize"
import { LogEngine } from "whiskey-log";
import activeDirectoryDevice from "./components/activeDirectoryDevice";
import { initializeDatabase } from "./config/db";

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
    private db:Sequelize = new Sequelize()

    public async setupDb(syncDb:boolean=false) {

        this.le.logStack.push("setupDb")

        try {
            this.le.AddLogEntry(LogEngine.EntryType.Info, "setting up db ..")
            this.db = initializeDatabase(this.le, this.dbName, this.dbUser, this.dbPass, this.dbHost, 'postgres')
            const result = await this.db.sync({force:true})
            this.le.AddLogEntry(LogEngine.EntryType.Info, ".. db setup complete.")
        } catch(err:any) {
            this.le.AddLogEntry(LogEngine.EntryType.Error, err)
            throw new Error(err)
        } finally {
            this.le.logStack.pop()
        }

    }

    public async addActiveDirectoryDeviceData(data:any) {
        this.le.AddDelimiter("Active Directory Device Data")
        this.le.AddLogEntry(LogEngine.EntryType.Info, "parsing AD device data ..")
        await activeDirectoryDevice(this.le, data)
        this.le.AddLogEntry(LogEngine.EntryType.Info, ".. finished parsing AD device data.")
    }

}