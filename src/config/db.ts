// dbConfig.ts
import { Sequelize } from 'sequelize';
import { LogEntryType } from 'whiskey-log';
import le from './le';

let db:Sequelize|null=null

async function initializeDatabase(dbHost:string, dbName:string, dbUser:string, dbPass:string, showLog:boolean=false) {
  le.AddLogEntry(LogEntryType.Warning, "init db: " + dbUser + "@" + dbHost + "::" + dbName)
  
  db = new Sequelize(dbName, dbUser, dbPass, {
      host: dbHost,
      dialect: 'postgres',
      logging: showLog ? (...msg) => console.log(msg) : false,
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

async function syncDb() {
  await getdb().sync({force:true})
}

const getdb = () => {
  if (!db) {
    throw new Error('Database has not been initialized. Please call initializeDatabase first.');
  }
  return db;
};


export default {
  initializeDatabase,
  syncDb,
  getdb
}