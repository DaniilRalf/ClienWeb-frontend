export interface LoginRegistrationInterface {
  password: string,
  username: string,
  firstname?: string,
  lastname?: string,
  email?: string,
}

export interface LoginOrRegistrationInputInterface {
  message: string | null,
  role: ['ROLE_ADMIN'] | ['ROLE_USER'] | ['ROLE_MODERATOR'] | ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_MODERATOR'],
  token: string,
}
