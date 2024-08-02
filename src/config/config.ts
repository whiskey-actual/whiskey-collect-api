import { LogEngine, LogEntryType } from 'whiskey-log';

let config = {}

const setConfig = (le:LogEngine, dbName:string, dbUser:string, dbPass:string, dbHost:string, dialect: 'postgres'|'mysql'|'sqlite'|'mssql') => {
  
    le.AddLogEntry(LogEntryType.Warning, ".. setting config ..")
  
    config = {
        le,
        dbName,
        dbUser,
        dbPass,
        dbHost,
        dialect
    }
  
    le.AddLogEntry(LogEntryType.Warning, ".. db initialization complete. ")

};

export const getConfig = () => {
    return config  
};
