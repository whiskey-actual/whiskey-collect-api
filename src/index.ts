import { Sequelize } from "sequelize"
import { LogEngine } from "whiskey-log";
import activeDirectoryDevice from "./components/activeDirectoryDevice";
import { initializeDatabase } from "./config/db";

export default class CollectorAPI {
    constructor(dbHost:string, dbName:string, dbUser:string, dbPass:string) {

        this.le = new LogEngine(["CollectorAPI"], false, 64)
        this.db = initializeDatabase(this.le, dbName, dbUser, dbPass, dbHost, 'postgres')
        
    }

    private le:LogEngine 
    private db:Sequelize

    public async setupDb() {

        this.le.logStack.push("setupDb")

        try {
            this.le.AddLogEntry(LogEngine.EntryType.Info, "setting up db ..")
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