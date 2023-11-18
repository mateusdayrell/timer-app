import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import Database from "@nozbe/watermelondb/Database";
import { schema } from "./schemas";
import models from "./models";

// export default function database() {
//   const adapter = new SQLiteAdapter({
//     jsi: false,
//     dbName: "timer-app",
//     schema,
//   });

//   return new Database({
//     adapter,
//     modelClasses: models,
//   });
// }

const adapter = new SQLiteAdapter({
  schema,
});

export const database = new Database({
  adapter,
  modelClasses: models,
});
