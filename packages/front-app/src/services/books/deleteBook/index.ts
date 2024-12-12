import { path } from "../";

export const deleteBook = async(bookId:string) => {
  fetch(path('/api/books/' + bookId), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: "no-store",
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