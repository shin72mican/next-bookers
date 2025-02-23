export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  createAt: Date;
  books: Book[];
}

export type Book = {
  id: string;
  userId: string;
  title: string;
  body: string;
  createAt: string;
};

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