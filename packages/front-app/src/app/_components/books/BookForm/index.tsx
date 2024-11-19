"use client"
import { storeBook } from "@/services/books/storeBook";
import { useState } from "react";

export const BookForm = () => {
  let [titleVal, setTitleVal] = useState<string>("");
  let [opinionVal, setOpinionVal] = useState<string>("");

  const createBook = () => {
    storeBook(titleVal, opinionVal);
  }
  
  return (
    <div>

      <h1>新規登録</h1>

      <form>

        <div>
          <label htmlFor="title">Title</label>
        </div>

        <div>
          <input 
            type="text" 
            onChange={(e) => { setTitleVal(e.target.value)}} 
          /> = { titleVal }
        </div>

        <div>
          <label htmlFor="opinion">Opinion</label>
        </div>

        <div>
          <input 
            type="text" 
            onChange={(e) => { setOpinionVal(e.target.value)}} 
          /> = { opinionVal }
        </div>

        <div>
          <button onClick={createBook}>Create Book</button>
        </div>

      </form>

    </div>
  )
}