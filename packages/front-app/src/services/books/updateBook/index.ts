import { path } from "../";
import type { Book } from "@/app/lib/type";

export const updateBook = async(userId:string, bookId:string, title: string, body:string) => {
  if(!userId) {
    return;
  }
  const book: Omit<Book, 'id' | 'createAt'> = {
    userId: userId,
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