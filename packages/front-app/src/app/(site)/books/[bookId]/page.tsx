import Link from 'next/link';
import { getBook } from "@/services/books/getBook";
import type { Book } from "@/app/lib/type";

type Props = {
  params: Promise<{ bookId: string }>
}

const Page = async (props: Props) => {
  const params = await props.params;
  const book:Book = await getBook(params.bookId);

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
            <th>{ book.title }</th>
            <th>{ book.body }</th>
          </tr>
        </tbody>
      </table>

      <Link href={"/books"}>back</Link>/
      <Link href={"/books/" + book.id + "/edit"}>edit</Link>
    </>
  );
}

export default Page;