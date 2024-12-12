import { path } from "../";
import type { Book } from "../../type";

export const updateBook = async(bookId:string, title: string, body:string) => {
  const book: Omit<Book, 'id' | 'createAt'> = {
    title: title,
    body: body,
  };
  fetch(path('/api/books/' + bookId), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  }).then((response) => {
    if(!response.ok) {
      console.log('fetch error!');
    } else {
      console.log('fetch success!');
    }
  }).catch((error) => {
    console.log(error);
  });
}