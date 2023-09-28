// model/schema.js
import { tableSchema } from "@nozbe/watermelondb";

export const timerSchema = tableSchema({
  name: "timers",
  columns: [
    { name: "title", type: "string" },
    { name: "description", type: "string", isOptional: true },
    { name: "initial_time", type: "string", isOptional: true },
    { name: "final_time", type: "string", isOptional: true },
    { name: "initial_date", type: "string", isOptional: true },
    { name: "final_date", type: "string", isOptional: true },
    { name: "repeat", type: "string", isOptional: true },
    { name: "user_id", type: "string" },
    { name: "is_done", type: "boolean", isOptional: true },
  ],
});
