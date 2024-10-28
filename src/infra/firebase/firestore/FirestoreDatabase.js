
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";

import { Database } from '../../../data/protocols/Database'

import { app } from "../config/firebaseConfig";
import { FirebaseRepository } from "../FirebaseRepository";

export class FirestoreDatabase extends Database {
    constructor() {
        super()

        this._db = getFirestore(app)
    }

    async searchByField(collectionName, documentField, documentValue) {
        const user = FirebaseRepository.getUser();

        if (!user) throw new Error('You must be logged in to use Cloud DB');

        const collectionQuery = query(
            collection(this._db, collectionName),
            where("userId", "==", user.uid),
            where(documentField, "==", documentValue)
        )

        const querySnapshot = await getDocs(collectionQuery)

        if (querySnapshot.empty()) return []

        const document = querySnapshot.docs[0]

        return document.data()
    }

    async getItemDetails(collectionName, id) {
        const user = FirebaseRepository.getUser();

        if (!user) throw new Error('You must be logged in to use Cloud DB');

        const collectionQuery = query(
            collection(this._db, collectionName),
            where("userId", "==", user.uid),
            where("id", "==", id)
        );

        const querySnapshot = await getDocs(collectionQuery)

        if (querySnapshot.empty()) return []

        return querySnapshot.docs.map(doc => doc.data())
    }

    async getAllItems(collectionName) {
        const user = FirebaseRepository.getUser();

        if (!user) throw new Error('You must be logged in to use Cloud DB');

        const collectionQuery = query(
            collection(this._db, collectionName),
            where("userId", "==", user.uid)
        );

        const querySnapshot = await getDocs(collectionQuery)

        if (querySnapshot.empty()) return []

        return querySnapshot.docs.map(doc => doc.data())
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
            console.error("Error adding document with FirestoreDatabase: ", error);
            throw error
        }
    }
}