import { path } from "../..";
import type { Book } from "../../type";

export const storeBook = async(title:string, body:string) => {
  const book: Omit<Book, 'id' | 'createAt'> = {
    title: title,
    body: body,
  };

  fetch(path(`/api/books`), {
    method: 'POST',
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  }).then((response) => {
    if(!response.ok) {
        console.log('error!');
    } 
    console.log('ok!');
  }).then((data)  => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });
  
}