// model/schema.js
import { tableSchema } from "@nozbe/watermelondb";

export const timerSchema = tableSchema({
  name: "timers",
  columns: [
    { name: "title", type: "string" },
    { name: "description", type: "string", isOptional: true },
    { name: "date", type: "string", isOptional: true },
    { name: "day_of_week", type: "string", isOptional: true },
    { name: "time", type: "string", isOptional: true },
    { name: "repeat", type: "boolean", isOptional: true },
    { name: "user_id", type: "string" },
    { name: "is_done", type: "boolean", isOptional: true },
    { name: "ntf_id", type: "string", isOptional: true },
  ],
});
