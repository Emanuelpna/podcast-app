import { randomUUID } from 'expo-crypto'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Database } from "../../data/protocols/Database";

export class AsyncStorageDatabase extends Database {
    constructor() {
        super()

        this._db = AsyncStorage;
    }

    async searchByField(collectionName, documentField, documentValue) {
        const result = await this._db.getItem(collectionName)

        if (!result) return null

        const data = JSON.parse(result)

        const document = data.find(item => item[documentField] === documentValue)

        return document;
    }

    async getAllItems(collectionName) {
        const result = await this._db.getItem(collectionName)

        if (!result) return []

        return JSON.parse(result)
    }

    async insertItem(collectionName, data) {
        try {
            const collectionData = await this._db.getItem(collectionName)

            const collectionList = JSON.parse(collectionData) ?? []

            data.id = randomUUID()

            const newList = collectionList.concat(data)

            return await this._db.setItem(collectionName, JSON.stringify(newList));
        } catch (error) {
            console.error("Error adding document with AsyncStorageDatabase: ", error);
            throw error
        }
    }
}