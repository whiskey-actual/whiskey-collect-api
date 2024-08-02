// dbConfig.ts
import { Sequelize } from 'sequelize';
import { LogEngine, LogEntryType } from 'whiskey-log';

let sequelize: Sequelize | null = null;

export const initializeDatabase = (le:LogEngine, dbHost:string, dbName:string, dbUser:string, dbPass:string, showLog:boolean=false) => {
  le.AddLogEntry(LogEntryType.Warning, ".. creating db connection .. ")
  
  sequelize = new Sequelize(dbName, dbUser, dbPass, {
      host: dbHost,
      dialect: 'postgres',
      logging: showLog,
      //operatorsAliases: {},
      pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
      }
  });
  
  le.AddLogEntry(LogEntryType.Warning, ".. db connection setup complete. ")

};

export const getDatabase = (): Sequelize => {
  if (!sequelize) {
    throw new Error('Database has not been initialized. Please call initializeDatabase first.');
  }
  return sequelize;
};
