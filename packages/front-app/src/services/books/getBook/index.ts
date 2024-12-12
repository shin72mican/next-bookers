import { handleFailed, bookHandleSucceed, path } from "..";
import type { Book } from "../../type";

export const getBook = async(bookId: string): Promise<Book> => {
  console.log(`/api/books/` + bookId);
  return fetch(path(`/api/books/` + bookId), {cache: "no-store"})
  .then(bookHandleSucceed)
  .catch(handleFailed);
}