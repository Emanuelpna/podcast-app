export class Database {
  constructor() {
    this._db = null;
  }

  async searchByField(collectionName, documentField, documentValue, sortBy) {
    throw new Error('Implemente esse método na classe filha')
  }

  async getAllItems(collectionName, sortBy) {
    throw new Error('Implemente esse método na classe filha')
  }

  async getItemDetails(collectionName, id) {
    throw new Error('Implemente esse método na classe filha')
  }

  async insertItem(collectionName, data) {
    throw new Error('Implemente esse método na classe filha')
  }

  async removeItem(collectionName, id) {
    throw new Error('Implemente esse método na classe filha')
  }

  async removeCollection(collectionName) {
    throw new Error('Implemente esse método na classe filha')
  }
}
