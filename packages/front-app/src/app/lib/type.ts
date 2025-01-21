export type SignUpFormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      } | string, 
      message?: string
    }
  | undefined

export type SignInFormState =
| {
    errors?: {
      email?: string[]
      password?: string[]
    } | string, 
    message?: string
  }
| undefined