import { handleFailed, bookHandleSucceed, path } from "..";
import type { Book } from "@/app/lib/type";

export const getBook = async(bookId: string): Promise<Book> => {
  return await fetch(path(`/api/books/` + bookId), {cache: "no-store"})
  .then(bookHandleSucceed)
  .catch(handleFailed);
}