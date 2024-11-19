import { getBooks } from "@/services/books/getBooks";

export const BookList = async() => {
  // 本一覧情報の取得
  const data = await getBooks();

  return (
    <>

      <h1>投稿一覧</h1>

      <table>

        <thead>
          <tr>
            <th>Title</th>
            <th>Opinion</th>
          </tr>
        </thead>

        <tbody>
          {data.books.length > 0 && 
              data.books.map((book) => (
                <tr key={book.id}>
                  <td>{ book.title }</td>
                  <td>{ book.body }</td>
                </tr>
              ))
            }
          </tbody>

        </table>
    </>
  )
}