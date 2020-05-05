import User from "./User";
import Address from "./Address";
import Group from "./Group";

export default class UserImpl implements User {
  id: number = -1;
  firstName: string = "";
  lastName: string = "";
  birthDate?: Date;
  email: string = "";
  username: string = "";
  password: string = "";
  subscribeToNewsLetter: boolean = false;
  address: Address;
  group: Group;
  isBusinessOwner: boolean;

  constructor(user?:User) {
    if(user) {
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.birthDate = user.birthDate;
      this.email = user.email;
      this.username = user.username;
      this.password = user.password;
      this.subscribeToNewsLetter = user.subscribeToNewsLetter;
      this.address = user.address;
      this.group = user.group;
      this.isBusinessOwner = user.isBusinessOwner;
    }
  }
}