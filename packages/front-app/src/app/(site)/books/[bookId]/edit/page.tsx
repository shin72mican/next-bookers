import { BookEditForm } from "@/app/_components/books/BookEditForm";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/auth";

type Props = {
  params: Promise<{ bookId: string }>
}

const Page = async (props: Props) => {
  const session = await getServerSession(authOptions)
  const params = await props.params;
  return (
    <>
      {/** 本編集フォーム */}
      <BookEditForm bookId={params.bookId} userId={session?.user.id} />
    </>
  )
}

export default Page;