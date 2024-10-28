import { SyncedDatabase } from "../database/SyncedDatabase"
import { PodcastChannelRepository } from "./PodcastChannelRepository"

import { AsyncStorageDatabase } from "../../infra/asyncStorage/AsyncStorageDatabase"
import { FirestoreDatabase } from "../../infra/firebase/firestore/FirestoreDatabase"

const syncedDatabase = new SyncedDatabase(new FirestoreDatabase(), new AsyncStorageDatabase())

export const podcastChannelRepository = new PodcastChannelRepository(
    syncedDatabase
)
