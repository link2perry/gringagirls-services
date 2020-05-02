export default interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate?: Date;
  username: string;
  password: string;
  subscribeToNewsLetter: boolean;
}