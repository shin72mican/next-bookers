import { BookEditForm } from "@/app/_components/books/BookEditForm";

type Props = {
  params: { bookId: string }
}

const Page = ({ params }: Props) => {
  return (
    <>
      {/** 本編集フォーム */}
      <BookEditForm bookId={params.bookId} />
    </>
  )
}

export default Page;