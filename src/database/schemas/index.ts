import { appSchema } from "@nozbe/watermelondb";
import { userSchema } from "./userSchama";
import { timerSchema } from "./timerSchema";

export const schema = appSchema({
  version: 4,
  tables: [userSchema, timerSchema],
});
