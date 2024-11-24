import AsyncStorage from '@react-native-async-storage/async-storage';

import { Database } from "../../data/protocols/Database";
import { LoggingService } from '../../data/services/LoggingService';

export class AsyncStorageDatabase extends Database {
  constructor() {
    super()

    this._db = AsyncStorage;
  }

  async searchByField(collectionName, documentField, documentValue) {
    const result = await this._db.getItem(collectionName)

    if (!result) return null

    const data = JSON.parse(result)

    const documents = data.filter(item => item?.[documentField] === documentValue)

    return documents;
  }

  async getItemDetails(collectionName, id) {
    const result = await this._db.getItem(collectionName)

    if (!result) return null

    const data = JSON.parse(result)

    const item = data.find(item => item.id === id)

    if (!item) return null

    return item
  }

  async getAllItems(collectionName, sortBy) {
    const result = await this._db.getItem(collectionName)

    if (!result) return []

    const data = JSON.parse(result)

    return data.sort((a, b) => {
      if (!a?.[sortBy] || !b?.[sortBy]) return 0

      return a[sortBy].localeCompare(b[sortBy], "pt", { sensitivity: "base", ignorePunctuation: true })
    })
  }

  async insertItem(collectionName, data) {
    try {
      const collectionData = await this._db.getItem(collectionName)

      const collectionList = JSON.parse(collectionData) ?? []

      const newList = collectionList.concat(data)

      await this._db.setItem(collectionName, JSON.stringify(newList));

      return data
    } catch (error) {
      LoggingService.error("Error adding document with AsyncStorageDatabase: ", error);
      throw error
    }
  }

  async removeItem(collectionName, id) {
    try {
      const allItems = await this.getAllItems(collectionName)

      if (allItems?.lenght === 0) throw new Error("Collection don't exists")

      const itemIndex = allItems.findIndex(item => item.id === id)

      if (itemIndex < 0) throw new Error("Document don't exist")

      return await this._db.setItem(collectionName, JSON.stringify(allItems.splice(itemIndex, 1)))
    } catch (error) {
      LoggingService.log("Error deleting document with AsyncStorageDatabase: ", error);
      throw error
    }
  }

  async removeCollection(collectionName) {
    try {
      await this._db.removeItem(collectionName)
    } catch (error) {
      LoggingService.log("Error deleting collection with AsyncStorageDatabase: ", error);
      throw error
    }
  }
}
