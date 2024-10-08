// import sql from 'sequelize'
// import {getDatabase} from '../config/db'

// const db = getDatabase()

// const Employee = db.define("Employee", {
//     EmployeeID:                                         {type:sql.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
//     EmployeeEmailAddress:                               {type:sql.STRING, allowNull:false},   //', "VARCHAR", true, true))
//     EmployeeLastObserved:                               {type:sql.DATE},   //', "DATETIME2"))
//     EmployeeIsActive:                                   {type:sql.BOOLEAN, defaultValue:false},   //', "BIT", false, true, undefined, false))
//     ObservedByActiveDirectory:                          {type:sql.BOOLEAN, defaultValue:false},   //', "BIT", false, true, undefined, false))
//     ObservedByAzureActiveDirectory:                     {type:sql.BOOLEAN, defaultValue:false},   //', "BIT", false, true, undefined, false))
//     ActiveDirectoryDN:                                  {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryCN:                                  {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectorySN:                                  {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryCountry:                             {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryCity:                                {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryState:                               {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryTitle:                               {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryOffice:                              {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryTelephoneNumber:                     {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryGivenName:                           {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryDisplayName:                         {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryDepartment:                          {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryStreetAddress:                       {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryUserName:                            {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryUserID:                              {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectorySAMAccountName:                      {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryUserPrincipalName:                   {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryUserMail:                            {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryManager:                             {type:sql.STRING},   //', "VARCHAR"))
//     ActiveDirectoryLogonCount:                          {type:sql.INTEGER},   //', "INT"))
//     ActiveDirectoryCreatedDate:                         {type:sql.DATE},   //', "DATETIME2"))
//     ActiveDirectoryChangedDate:                         {type:sql.DATE},   //', "DATETIME2"))
//     ActiveDirectoryBadPasswordTime:                     {type:sql.DATE},   //', "DATETIME2"))
//     ActiveDirectoryLastLogon:                           {type:sql.DATE},   //', "DATETIME2"))
//     ActiveDirectoryLastLogonTimestamp:                  {type:sql.DATE},   //', "DATETIME2"))
//     ActiveDirectoryLastSeen:                            {type:sql.DATE},   //', "DATETIME2"))
//     AzureActiveDirectoryAccountEnabled:                 {type:sql.BOOLEAN},   //', "BIT", true, true))
//     AzureActiveDirectoryUserPrincipalName:              {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryId:                             {type:sql.STRING},   //', "VARCHAR", true, true))
//     AzureActiveDirectoryBusinessPhone:                  {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryDisplayName:                    {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryGivenName:                      {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryJobTitle:                       {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryMobilePhone:                    {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryOfficeLocation:                 {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectorySurname:                        {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryAssignedPlans:                  {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryCity:                           {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryCountry:                        {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryCreationType:                   {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryDepartment:                     {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryEmployeeHireDate:               {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryEmployeeId:                     {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryEmployeeOrgData:                {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryEmployeeType:                   {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryOnPremisesDistinguishedName:    {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryOnPremisesDomainName:           {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryOnPremisesSamAccountName:       {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryOnPremisesUserPrincipalName:    {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryPasswordPolicies:               {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryPostalCode:                     {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryState:                          {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryStreetAddress:                  {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryUserType:                       {type:sql.STRING},   //', "VARCHAR"))
//     AzureActiveDirectoryCreatedDateTime:                {type:sql.DATE},   //', "DATETIME2"))
//     AzureActiveDirectoryDeletedDateTime:                {type:sql.DATE},   //', "DATETIME2"))
//     AzureActiveDirectoryLastPasswordChangeDateTime:     {type:sql.DATE},   //', "DATETIME2"))
//     AzureActiveDirectoryLastSignInDateTime:             {type:sql.DATE},   //', "DATETIME2"))
//     AzureActiveDirectoryLastSeen:                       {type:sql.DATE},   //', "DATETIME2"))
// },
// {
//     freezeTableName: true,
//     modelName: 'Employee',
//     initialAutoIncrement: '0'
// });

// Employee.upsert({EmployeeID:0, EmployeeEmailAddress:'UNKNOWN'})

// export default Employee
