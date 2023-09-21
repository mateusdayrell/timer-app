import { Model } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import { field } from "@nozbe/watermelondb/decorators";

export default class UserModel extends Model {
  static table = "users";

  static associations: Associations = {
    timers: { type: "has_many", foreignKey: "user_id" },
  };

  @field("name") name!: string;
  @field("email") email!: string;
  @field("password") password!: string;
}
