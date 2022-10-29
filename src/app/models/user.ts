export interface UserInterface {
  firstname?: string;
  lastname?: string;
  userContact?: ContactInterface[];
  username?: string;
}

export interface ContactInterface {
  type?: string;
  contact?: string;
}
