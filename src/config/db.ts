// dbConfig.ts
import { Sequelize } from 'sequelize';
import { LogEngine } from 'whiskey-log';

let sequelize: Sequelize | null = null;

export const initializeDatabase = (le:LogEngine, dbName:string, dbUser:string, dbPass:string, dbHost:string, dialect: 'postgres'|'mysql'|'sqlite'|'mssql') => {
  if (!sequelize) {
    le.AddLogEntry(LogEngine.EntryType.Warning, "initializing db .. ")
    sequelize = new Sequelize(dbName, dbUser, dbPass, {
        host: dbHost,
        dialect,
        logging: false,
        operatorsAliases: {},
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
  }
  le.AddLogEntry(LogEngine.EntryType.Warning, ".. db initialization complete. ")
  return sequelize;
};

export const getDatabase = (): Sequelize => {
  if (!sequelize) {
    throw new Error('Database has not been initialized. Please call initializeDatabase first.');
  }
  return sequelize;
};
