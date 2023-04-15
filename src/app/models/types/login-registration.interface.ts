import {RoleEnum} from "../enum/role.enum"

export interface LoginRegistrationInterface {
  password: string,
  username: string,
  firstname?: string,
  lastname?: string,
  email?: string,
}

export interface LoginOrRegistrationInputInterface {
  message: string | null,
  role: RoleEnum[],
  token: string,
}
