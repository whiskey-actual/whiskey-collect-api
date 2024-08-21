// dbConfig.ts
import { Sequelize } from 'sequelize';
import { LogEntryType } from 'whiskey-log';
import le from './le';
import sleep from '../utilities/sleep';

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
  
  await db.sync({force:true})

  le.AddLogEntry(LogEntryType.Warning, ".. db connection setup complete. ")

};

const getdb = async () => {
  const MAX_ATTEMPTS = 30
  let attemptCounter=0
  while(!db && attemptCounter<MAX_ATTEMPTS) {
    sleep(le, ".. waiting for db")
    attemptCounter++
  }
  if (!db) {
    throw new Error('Database has not been initialized. Please call initializeDatabase first.');
  }
  return db;
};


export default {
  initializeDatabase,
  getdb
}