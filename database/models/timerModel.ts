import { Model } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import { field } from "@nozbe/watermelondb/decorators";
import UserModel from "./userModel";

export default class TimerModel extends Model {
  static table = "timers";

  static associations: Associations = {
    timers: { type: "belongs_to", key: "user_id" },
  };

  @field("title") title!: string;
  @field("description") description!: string;
  @field("hour") hour!: string;
  @field("day") day!: string;
  @field("repeat") repeat!: string;
  @field("user_id") user_id!: string;
  @immutableRelation("users", "user_id") user!: UserModel;
}
