import { Model } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import { field, writer } from "@nozbe/watermelondb/decorators";
import { database } from "..";

export default class UserModel extends Model {
  static table = "users";

  static associations: Associations = {
    timers: { type: "has_many", foreignKey: "user_id" },
  };

  @field("name") name!: string;
  @field("email") email!: string;
  @field("password") password!: string;

  @writer async store(data: {name:string, email:string, password:string}) {
    await this.collections.get<UserModel>('users').create(user =>{
      user.name = data.name
      user.email = data.email
      user.password = data.password
    })
  }
}
