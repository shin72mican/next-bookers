"use client"
import { updateBook } from "@/services/books/updateBook";
import { useState } from "react";
import { useRouter } from 'next/navigation'

type Book = {
  bookId: string,
}

export const BookEditForm = (props: Book) => {
  const router = useRouter()

  let [titleVal, setTitleVal] = useState<string>("");
  let [opinionVal, setOpinionVal] = useState<string>("");

  const editBook = (event: React.FormEvent) => {
    event.preventDefault();
    updateBook(props.bookId, titleVal, opinionVal);
    router.push('/books');
  }

  return (
    <>
      <h1>編集登録</h1>

      <form>
        <div>
          <label htmlFor="title">Title</label>
        </div>

        <div>
          <input
            type="text"
            onChange={(e) => { setTitleVal(e.target.value) }}
            id="title"
          /> = { titleVal }
        </div>

        <div>
          <label htmlFor="opinion">opinion</label>
        </div>

        <div>
          <input 
            type="text"
            onChange={(e) => { setOpinionVal(e.target.value) }}
            id="opinion"
          /> = { opinionVal }
        </div>

        <div>
          <button onClick={editBook}>Edit Book</button>
        </div>
      </form>
    </>
  );
}