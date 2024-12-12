import Link from 'next/link'
import { getBooks } from "@/services/books/getBooks";
import { BookDeleteBtn } from "@/app/_components/books/BookDeleteBtn";

type Book = {
  id: string,
  title: string,
  body: string,
}

export const BookList = async() => {
  // 本一覧情報の取得
  const data:Book[] = await getBooks();

  return (
    <>

      <h1>投稿一覧</h1>

      <table>

        <thead>
          <tr>
            <th>Title</th>
            <th>Opinion</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.books.length > 0 && 
              data.books.map((book:Book) => (
                <tr key={book.id}>
                  <td>{ book.title }</td>
                  <td>{ book.body }</td>
                  <td><Link href={"/books/" + book.id}>show</Link></td>
                  <td><Link href={"/books/" + book.id + "/edit"}>edit</Link></td>
                  <td><BookDeleteBtn bookId={book.id} /></td>
                </tr>
              ))
            }
          </tbody>

        </table>
    </>
  )
}