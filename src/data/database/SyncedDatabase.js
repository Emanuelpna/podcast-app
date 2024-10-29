import { Database } from "../protocols/Database";

export class SyncedDatabase extends Database {
  constructor(cloudDB, localDB) {
    super()

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
      console.log("Unable to fetch from CLOUD DB");

      result = await this._localDB.searchByField(collectionName, documentField, documentValue)
    }

    return result
  }

  async getAllItems(collectionName, sortBy) {
    let result = [];

    try {
      result = await this._cloudDB.getAllItems(collectionName, sortBy)
    } catch (error) {
      console.log("Unable to fetch from CLOUD DB");

      result = await this._localDB.getAllItems(collectionName, sortBy)
    }

    return result
  }

  async insertItem(collectionName, data) {
    let result = null

    try {
      result = await this._localDB.insertItem(collectionName, data);
    } catch (error) {
      console.error("Unable to insert item in LOCAL DB");
      return null
    }

    this._cloudDB.insertItem(collectionName, data)
      .catch(error => {
        console.log('Unable to insert item in CLOUD DB', error);

        this._localDB.insertItem('sync-queue', { collectionName, data });
      })

    return result
  }
}
