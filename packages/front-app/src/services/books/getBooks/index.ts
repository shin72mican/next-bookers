import { handleFailed, handleSucceed, path } from "../..";
import type { Book } from "../../type";

export type GetBooksResponse = {
  books: Book[];
}

export const getBooks = async(): Promise<Book[]> => {
  return fetch(path(`/api/books`), {cache: "no-store"})
         .then(handleSucceed)
         .catch(handleFailed);
}