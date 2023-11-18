import { database } from "../database";
import { Q } from "@nozbe/watermelondb";
import UserModel from "../database/models/userModel";

export const useLogin = async (emailParam:string, password:string) => {
    const arr = await database.get('users').query(
        Q.where('email', Q.like(emailParam)),
        Q.where('password', Q.like(password))
    ).fetch();

    const user = arr[0] as UserModel | undefined;

    if (user) {
        const { id, name, email } = user;
        return { id, name, email };
      } else {
        return null;
      }
}