export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createAt: string;
}

export type Book = {
  id: string;
  userId: string;
  title: string;
  body: string;
  createAt: string;
};