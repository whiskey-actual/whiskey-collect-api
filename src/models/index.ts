import { Sequelize } from 'sequelize';
import { Device, initDevice } from './Device';
// Import other models similarly

export function initModels(sequelize: Sequelize) {
  initDevice(sequelize)

  // Initialize other models here...

  // Define relationships after all models are initialized
  defineRelationships();
}

// Define relationships in a separate function
function defineRelationships() {
  // Example relationship: User has many Posts
  // Assuming you have a Post model defined similarly to User
//   User.hasMany(Post, {
//     foreignKey: 'userId',
//     as: 'posts',
//   });

//   Post.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user',
//   });

  // Add other relationships here...
}

export const models = {
    Device
};