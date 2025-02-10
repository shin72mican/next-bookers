import { BookList } from "@/app/_components/books/BookList";
import { BookForm } from "@/app/_components/books/BookForm";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/auth";

export default async function Page() {
  const session = await getServerSession(authOptions)
  console.log(session);
  return (
    <>
      {/* 本一覧 */}
      <BookList />

      {/* 本投稿フォーム */}
      <BookForm id={session?.user.id} />
      
    </>
  )
}