"use client"
import { deleteBook } from "@/services/books/deleteBook";
import { useRouter } from 'next/navigation'

type Props = {
  bookId: string,
}

export const BookDeleteBtn = (props:Props) => {
  const router = useRouter();

  const clickDeleteBook = (bookId:string) => {
    deleteBook(bookId);
    router.push('/books');
  }

  return (
    <button onClick={() => clickDeleteBook(props.bookId)}>delete</button>
  )
}