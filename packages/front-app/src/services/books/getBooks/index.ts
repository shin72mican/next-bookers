import { handleFailed, booksHandleSucceed, path } from "../";
import type { Book } from "@/app/lib/type";

export type GetBooksResponse = {
  books: Book[];
}

export const getBooks = async(): Promise<Book[]> => {
  return fetch(path(`/api/books`), {cache: "no-store"})
         .then(booksHandleSucceed)
         .catch(handleFailed);
}