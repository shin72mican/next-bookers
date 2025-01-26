"use client"
import { storeBook } from "@/services/books/storeBook";
import { useState } from "react";

type Props = {
  id: string|undefined,
}

export const BookForm = (props: Props) => {
  let [titleVal, setTitleVal] = useState<string>("");
  let [opinionVal, setOpinionVal] = useState<string>("");

  const createBook = () => {
    const id = props.id;
    if(!id) {
      return
    }
    storeBook(id, titleVal, opinionVal);
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
            id="title"
          />
        </div>

        <div>
          <label htmlFor="opinion">Opinion</label>
        </div>

        <div>
          <input 
            type="text" 
            onChange={(e) => { setOpinionVal(e.target.value)}} 
            id="opinion"
          />
        </div>

        <div>
          <button onClick={createBook}>Create Book</button>
        </div>
      </form>

    </div>
  )
}