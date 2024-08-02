// dbConfig.ts
import { Sequelize } from 'sequelize';
import { LogEntryType } from 'whiskey-log';
import le from './le';

let db:Sequelize = new Sequelize({dialect:'postgres'})

async function initializeDatabase(dbHost:string, dbName:string, dbUser:string, dbPass:string, showLog:boolean=false) {
  le.AddLogEntry(LogEntryType.Warning, ".. creating db connection .. ")
  
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

// const db = () => {
//   if (!sequelize) {
//     throw new Error('Database has not been initialized. Please call initializeDatabase first.');
//   }
//   return sequelize;
// };


export default {
  initializeDatabase,
  db
}