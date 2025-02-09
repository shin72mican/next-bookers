export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createAt: Date;
}

export type Book = {
  id: string;
  userId: string;
  createAt: Date;
  title: string;
  body: string;
}