import { SyncCollectionActions } from "../../domain/enums/SyncCollectionActions";
import { DatabaseCollectionNames } from "../../domain/enums/DatabaseCollectionNames";

import { Database } from "../protocols/Database";
import { LoggingService } from "../services/LoggingService";

export class SyncDBRepository {
  constructor(cloudDB, localDB) {
    if (!cloudDB instanceof Database || !localDB instanceof Database)
      throw LoggingService.error('You need to use a class that extends `/data/protocols/Database`');

    /** @type {Database} _cloudDB */
    this._cloudDB = cloudDB;
    /** @type {Database} _localDB */
    this._localDB = localDB;
  }

  async getUnsyncedData() {
    return await this._localDB.getAllItems(DatabaseCollectionNames.SYNC_QUEUE)
  }

  async bulkSyncData() {
    await this.downloadCloudDataToLocal()
    await this.uploadLocalDataToCloud()
  }

  async uploadLocalDataToCloud() {
    const unsyncedItems = await this.getUnsyncedData()

    for await (const item of unsyncedItems) {
      if (!item?.id || !item?.collectionName || !item?.action || !item?.data) continue

      if (item.action === SyncCollectionActions.CREATE_ITEM) {
        const savedItem = await this._cloudDB.searchByField(item.collectionName, "title", item.data?.title)

        if (savedItem.length === 0) {
          await this._cloudDB.insertItem(item.collectionName, item.data)
        }
      }

      if (item.action === SyncCollectionActions.DELETE_ITEM)
        await this._cloudDB.removeItem(item.collectionName, item.id)

      await this._localDB.removeItem(DatabaseCollectionNames.SYNC_QUEUE, item.id)
    }
  }

  async downloadCloudDataToLocal() {
    const collections = Object.values(DatabaseCollectionNames)

    for await (const collection of collections) {
      if (collection === DatabaseCollectionNames.SYNC_QUEUE) continue

      const localItems = await this._localDB.getAllItems(collection)

      if (localItems.length > 0) continue

      const cloudItems = await this._cloudDB.getAllItems(collection)

      for await (const item of cloudItems) {
        await this._localDB.insertItem(collection, item)
      }
    }
  }
}
