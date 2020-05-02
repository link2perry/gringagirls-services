import User from "./User";

export default class UserImpl implements User {
  id: number = -1;
  firstName: string = "";
  lastName: string = "";
  birthDate?: Date;
  email: string = "";
  username: string = "";
  password: string = "";

  constructor(user?:User) {
    if(user) {
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.birthDate = user.birthDate;
      this.email = user.email;
      this.username = user.username;
      this.password = user.password;
    }
  }
}