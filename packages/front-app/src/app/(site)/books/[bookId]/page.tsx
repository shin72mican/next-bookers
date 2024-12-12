import Link from 'next/link';
import { getBook } from "@/services/books/getBook";

type Props = {
  params: { bookId: string }
}

const Page = async({ params }: Props) => {
  const data = await getBook(params.bookId);
  
  return (
    <>
      <h1>投稿詳細</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Opinion</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>{ data.book.title }</th>
            <th>{ data.book.body }</th>
          </tr>
        </tbody>
      </table>

      <Link href={"/books"}>back</Link>/
      <Link href={"/books/" + data.book.id + "/edit"}>edit</Link>
    </>
  );
}

export default Page;