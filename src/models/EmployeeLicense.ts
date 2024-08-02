// import sql from 'sequelize'
// import {getDatabase} from '../config/db'
// import Employee from './Employee';

// const db = getDatabase()

// const EmployeeLicense = db.define("EmployeeLicense", {
//     EmployeeLicenseID:  {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
//     EmployeeID:         {type:sql.INTEGER, allowNull:false},  //', "INT", false, true))
//     LicenseID:          {type:sql.INTEGER, allowNull:false},  //', "INT", false, true))
//     PlanID:             {type:sql.STRING},
//     AssignmentDateTime: {type:sql.STRING},  //', "DATETIME2"))
//     AssignmentStatus:   {type:sql.STRING},  //', "VARCHAR"))
// },
// {
//     freezeTableName: true,
//     modelName: 'EmployeeLicense',
//     initialAutoIncrement: '0'
// });

// EmployeeLicense.belongsTo(Employee, {foreignKey: {name:'EmployeeID', allowNull:false, defaultValue:0}})
// EmployeeLicense.belongsTo(Employee, {foreignKey: {name:'EmployeeID', allowNull:false, defaultValue:0}})

// export default Employee
