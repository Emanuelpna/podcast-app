import { SyncedDatabase } from "../useCases/SyncedDatabase"

import { SyncDBRepository } from "./SyncDBRepository"
import { PodcastChannelRepository } from "./PodcastChannelRepository"
import { PodcastEpisodeRepository } from "./PodcastEpisodeRepository"

import { AsyncStorageDatabase } from "../../infra/asyncStorage/AsyncStorageDatabase"
import { FirestoreDatabase } from "../../infra/firebase/firestore/FirestoreDatabase"

const cloudDB = new FirestoreDatabase()
const localDB = new AsyncStorageDatabase()

const syncedDatabase = new SyncedDatabase(cloudDB, localDB)

export const podcastChannelRepository = new PodcastChannelRepository(
  syncedDatabase
)

export const podcastEpisodeRepository = new PodcastEpisodeRepository(
  syncedDatabase
)

export const syncDBRepository = new SyncDBRepository(cloudDB, localDB)
