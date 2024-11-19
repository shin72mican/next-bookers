import { BookList } from "@/app/_components/books/BookList";
import { BookForm } from "@/app/_components/books/BookForm";

export default async function Page() {

  return (
    <>
      {/* 本一覧 */}
      <BookList />

      {/* 本投稿フォーム */}
      <BookForm />
      
    </>
  )
}