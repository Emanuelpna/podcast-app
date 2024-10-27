// import * as SQLite from 'expo-sqlite';

// import { configDB } from './scripts/configDB';
// import { createTables } from './scripts/createTables';

// export class SQLiteDatabase {
//   constructor() {
//     this.db = SQLite.openDatabaseSync('podcastapp.db');
//     this.#bind();
//   }

//   #bind() {
//     this.db.execSync(configDB);
//     this.db.execSync(createTables);

//     // this.db.withExclusiveTransactionAsync(async (tx) => {
//     //   for await (const table of createTables) {
//     //     await txn.execAsync(table);
//     //   }

//     //   txn.execAsync("insert into author(name, email) values('Author 1', 'teste@email.com');")
//     // });
//   }

//   async getAll(tableName) {
//     return await this.db.getAllAsync(`SELECT * FROM ${tableName}`);
//   }

//   async insert() {
//     const tableKeys = {
//       channel: "(name, email)",
//       episode: "(channelId, title, link, )",
//       author: "(name, email)",
//       audioFile: "(url, length, fileType)",
//     }

//     await db.runAsync(`INSERT INTO ${tableName} (value, intValue) VALUES (?, ?)`, [
//       999,
//       'aaa',
//     ]);
//   }
// }
