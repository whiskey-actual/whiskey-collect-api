import { Sequelize } from 'sequelize';
import { Device, initDevice } from './Device';
import { DeviceActiveDirectory, initDeviceActiveDirectory } from './DeviceActiveDirectory';
import { DeviceAzure, initDeviceAzure } from './DeviceAzure';
import { DeviceAzureManaged, initDeviceAzureManaged } from './DeviceAzureManaged';
import DeviceConnectwise, { initDeviceConnectwise } from './DeviceConnectwise';
import { DeviceCrowdstrike, initDeviceCrowdstrike } from './DeviceCrowdstrike';

export function initModels(sequelize: Sequelize) {
  initDevice(sequelize)
  initDeviceActiveDirectory(sequelize)
  initDeviceAzure(sequelize)
  initDeviceAzureManaged(sequelize)
  initDeviceConnectwise(sequelize)
  initDeviceCrowdstrike(sequelize)


  // Define relationships after all models are initialized
  defineRelationships();

  // Add default values ..
  //addDefaultValues();
}

function addDefaultValues() {
  Device.upsert({DeviceID:0, DeviceName:'UNKNOWN'})
  DeviceActiveDirectory.upsert({DeviceActiveDirectoryID:0, ActiveDirectoryDN:'UNKNOWN'})
  DeviceAzure.upsert({DeviceAzureID:0, DeviceAzureDeviceId:'UNKNOWN'})
  DeviceAzureManaged.upsert({DeviceAzureManagedID:0, AzureManagedId:'UNKNOWN'})
  DeviceConnectwise.upsert({DeviceConnectwiseID:0, DeviceConnectwiseId:'UNKNOWN'})
  DeviceCrowdstrike.upsert({DeviceCrowdstrikeID:0, CrowdstrikeDeviceId:'UNKNOWN'})
}

function defineRelationships() {

  Device.belongsTo(DeviceActiveDirectory, {as:'DeviceActiveDirectory', foreignKey:'DeviceActiveDirectoryID'})
  //Device.belongsTo(OperatingSystem, {foreignKey: {name:'OperatingSystemID', allowNull:false, defaultValue:0}})
  Device.belongsTo(DeviceAzure, {foreignKey: {name:'DeviceAzureID', allowNull:false, defaultValue:0}})
  Device.belongsTo(DeviceAzureManaged, {foreignKey: {name:'DeviceAzureManagedID', allowNull:false, defaultValue:0}})
  Device.belongsTo(DeviceConnectwise, {foreignKey: {name:'DeviceConnectwiseID', allowNull:false, defaultValue:0}})
  Device.belongsTo(DeviceCrowdstrike, {foreignKey: {name:'DeviceCrowdstrikeID', allowNull:false, defaultValue:0}})

  DeviceActiveDirectory.belongsTo(Device, {as:'Device', foreignKey:'DeviceID'})
  DeviceActiveDirectory.belongsTo(Device, {foreignKey:{name:'DeviceID', allowNull:false}})

  DeviceAzure.belongsTo(Device, {foreignKey: {name:'DeviceID', allowNull:false, defaultValue:0}})

  DeviceAzureManaged.belongsTo(Device, {foreignKey: {name:'DeviceID', allowNull:false, defaultValue:0}})

  DeviceConnectwise.belongsTo(Device, {foreignKey: {name:'DeviceID', allowNull:false, defaultValue:0}})

  DeviceCrowdstrike.belongsTo(Device, {foreignKey: {name:'DeviceID', allowNull:false, defaultValue:0}})

}

export const models = {
    Device
};