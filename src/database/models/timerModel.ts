import { Model } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import { field } from "@nozbe/watermelondb/decorators";

export default class TimerModel extends Model {
  static table = "timers";

  static associations: Associations = {
    timers: { type: "belongs_to", key: "user_id" },
  };

  @field("title") title!: string;
  @field("description") description!: string;
  @field("date") date!: string;
  @field("day_of_week") day_of_week!: string;
  @field("time") time!: string;
  @field("repeat") repeat!: boolean;
  @field("user_id") user_id!: string;
  @field("ntf_id") ntf_id!: string;
  @field("is_done") is_done!: boolean;
}
