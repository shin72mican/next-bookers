export type User = {
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
  createAt: Date;
  title: string;
  body: string;
}