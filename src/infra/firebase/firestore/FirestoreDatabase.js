
import { getFirestore, collection, doc, addDoc, deleteDoc, query, where, getDocs, orderBy } from "firebase/firestore";

import { Database } from '../../../data/protocols/Database'

import { app } from "../config/firebaseConfig";
import { FirebaseRepository } from "../FirebaseRepository";

export class FirestoreDatabase extends Database {
  constructor() {
    super()

    this._db = getFirestore(app)
  }

  async searchByField(collectionName, documentField, documentValue, sortBy) {
    const user = FirebaseRepository.getUser();

    if (!user) throw new Error('You must be logged in to use Cloud DB');

    try {
      const collectionQuery = query(
        collection(this._db, collectionName),
        where("userId", "==", user.uid),
        where(documentField, "==", documentValue),
        orderBy(sortBy)
      )

      const querySnapshot = await getDocs(collectionQuery)

      if (querySnapshot.empty) return []

      return querySnapshot.docs.map(doc => {
        return { ...doc.data(), documentId: doc.id }
      })
    } catch (error) {
      console.log(error);

      return []
    }
  }

  async getItemDetails(collectionName, id) {
    const user = FirebaseRepository.getUser();

    if (!user) throw new Error('You must be logged in to use Cloud DB');

    try {
      const collectionQuery = query(
        collection(this._db, collectionName),
        where("userId", "==", user.uid),
        where("id", "==", id),
      );

      const querySnapshot = await getDocs(collectionQuery)

      if (querySnapshot.empty) return null

      return querySnapshot.docs.map(doc => {
        return { ...doc.data(), documentId: doc.id }
      })[0]
    } catch (error) {
      console.log(error);

      return null
    }
  }

  async getAllItems(collectionName, sortBy) {
    const user = FirebaseRepository.getUser();

    if (!user) throw new Error('You must be logged in to use Cloud DB');

    try {
      const collectionQuery = query(
        collection(this._db, collectionName),
        where("userId", "==", user.uid),
        orderBy(sortBy)
      );

      const querySnapshot = await getDocs(collectionQuery)

      if (querySnapshot.empty) return []

      return querySnapshot.docs.map(doc => {
        return { ...doc.data(), documentId: doc.id }
      })
    } catch (error) {
      console.log(error);

      return []
    }
  }

  async insertItem(collectionName, data) {
    try {
      const user = FirebaseRepository.getUser()

      if (!user) throw new Error('You must be logged in to use Cloud DB');

      const firestoreData = {
        ...data,
        userId: user.uid
      }

      const document = await addDoc(collection(this._db, collectionName), firestoreData);

      return document
    } catch (error) {
      console.log("Error adding document with FirestoreDatabase: ", error);
      throw error
    }
  }

  async removeItem(collectionName, id) {
    try {
      const user = FirebaseRepository.getUser();

      if (!user) throw new Error('You must be logged in to use Cloud DB');

      const item = await this.getItemDetails(collectionName, id)

      if (!item) throw new Error("Document don't exist")

      if (user.uid !== item.userId) throw new Error("Document couldn't be deleted")

      return await deleteDoc(doc(this._db, collectionName, item.documentId))
    } catch (error) {
      console.log("Error deleting document with FirestoreDatabase: ", error);
      throw error
    }
  }
}
