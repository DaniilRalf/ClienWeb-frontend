export interface UserInterface {
  firstname: string,
  lastname: string,
  userContact: UserContactInterface[],
  username: string,
}

export interface UserContactInterface {
  contact: string,
  type: 'PHONE' | 'MAIL',
}
