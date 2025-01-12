'use client'
import { useState } from "react";

const Page = () => {
  let [userNameVal, setUserNameVal] = useState<string>("");
  let [emailVal, setEmailVal] = useState<string>("");
  let [passwordVal, setPasswordVal] = useState<string>("");

  const login = () => {
    
  }

  return (
    <>
      <h1>ログインフォーム</h1>

      <form>

        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => { setEmailVal(e.target.value) }}
            id="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => { setPasswordVal(e.target.value) }}
            id="password"
          />
        </div>

        <div>
          <button onClick={login}>login</button>
        </div>
      </form>
    </>
  )
}

export default Page;