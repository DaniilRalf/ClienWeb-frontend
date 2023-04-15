import {RoleEnum} from "../enum/role.enum"

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

export interface UserOfLocalStorageInterface {
  message: string | null,
  token: string,
  id: number,
  role: RoleEnum[]
}
