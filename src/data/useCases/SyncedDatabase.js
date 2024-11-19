import { randomUUID } from 'expo-crypto'

import { SyncCollectionActions } from "../../domain/enums/SyncCollectionActions";
import { DatabaseCollectionNames } from '../../domain/enums/DatabaseCollectionNames';

import { Database } from "../protocols/Database";
import { LoggingService } from '../services/LoggingService';

export class SyncedDatabase extends Database {
  constructor(cloudDB, localDB) {
    super()

    if (!cloudDB instanceof Database || !localDB instanceof Database)
      throw LoggingService.error('You need to use a class that extends `/data/protocols/Database`');

    /** @type {Database} _cloudDB */
    this._cloudDB = cloudDB;
    /** @type {Database} _localDB */
    this._localDB = localDB;
  }

  async searchByField(collectionName, documentField, documentValue) {
    let result = [];

    try {
      result = await this._cloudDB.searchByField(collectionName, documentField, documentValue)
    } catch (error) {
      LoggingService.log("Unable to fetch from CLOUD DB");

      result = await this._localDB.searchByField(collectionName, documentField, documentValue)
    }

    return result
  }

  async getAllItems(collectionName, sortBy) {
    let result = [];

    try {
      result = await this._cloudDB.getAllItems(collectionName, sortBy)
    } catch (error) {
      LoggingService.log("Unable to fetch from CLOUD DB");

      result = await this._localDB.getAllItems(collectionName, sortBy)
    }

    return result
  }

  async getItemDetails(collectionName, id) {
    let result = null;

    try {
      result = await this._cloudDB.getItemDetails(collectionName, id)
    } catch (error) {
      LoggingService.log("Unable to fetch from CLOUD DB");

      result = await this._localDB.getAllItems(collectionName, id)
    }

    return result
  }

  async insertItem(collectionName, data) {
    let result = null

    if (!data.id)
      data.id = randomUUID()

    try {
      result = await this._localDB.insertItem(collectionName, data);
    } catch (error) {
      LoggingService.error("Unable to insert item in LOCAL DB");
      return null
    }

    this._cloudDB.insertItem(collectionName, data)
      .catch(error => {
        LoggingService.log('Unable to insert item in CLOUD DB', error);

        this._localDB.insertItem(
          DatabaseCollectionNames.SYNC_QUEUE,
          { id: randomUUID(), collectionName, data, action: SyncCollectionActions.CREATE_ITEM }
        );
      })

    return result
  }

  async removeItem(collectionName, id) {
    let result = null

    try {
      result = await this._localDB.removeItem(collectionName, id);
    } catch (error) {
      LoggingService.log("Unable to delete item in LOCAL DB");
    }

    this._cloudDB.removeItem(collectionName, id)
      .catch(error => {
        LoggingService.log('Unable to delete item in CLOUD DB', error);

        this._localDB.insertItem(
          DatabaseCollectionNames.SYNC_QUEUE,
          { id: randomUUID(), collectionName, id, action: SyncCollectionActions.DELETE_ITEM }
        );
      })

    return result
  }
}
