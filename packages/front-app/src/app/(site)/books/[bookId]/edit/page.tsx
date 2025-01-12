import { BookEditForm } from "@/app/_components/books/BookEditForm";

type Props = {
  params: Promise<{ bookId: string }>
}

const Page = async (props: Props) => {
  const params = await props.params;
  return (
    <>
      {/** 本編集フォーム */}
      <BookEditForm bookId={params.bookId} />
    </>
  )
}

export default Page;