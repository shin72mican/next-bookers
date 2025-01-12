'use client'
import { useActionState } from "react";
import { signup } from "@/services/auth/user";
// import type { User } from "@/services/type";
import { SignUpFormState } from "@/app/lib/type";

const Page = () => {
  const [state, formAction] = useActionState(signup, undefined);

  return (
    <>
      <h1>新規登録フォーム</h1>

      <form action={formAction}>
      {/* <form> */}
        <div>
          <label htmlFor="name">User Name</label>
        </div>
        {/* {validatedFields?.errors?.name && <p>{validatedFields.errors.name}</p>} */}
        <div>
          {/* { !(typeof state?.errors === 'string') && state?.errors?.name && <p>{state.errors.name}</p>} */}
          <input
            type="text"
            // onChange={(e) => { setUserNameVal(e.target.value) }}
            id="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
        {/* { !(typeof state?.errors === 'string') && state?.errors?.email && <p>{state.errors.email}</p>} */}
          <input
            type="text"
            // onChange={(e) => { setEmailVal(e.target.value) }}
            id="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
        {/* { !(typeof state?.errors === 'string') && state?.errors?.password && <p>{state.errors.password}</p>} */}
          <input
            type="text"
            // onChange={(e) => { setPasswordVal(e.target.value) }}
            id="password"
          />
        </div>

        <div>
          {/* <button onClick={signup}>login</button> */}
          <button>login</button>
        </div>
      </form>
    </>
  )
}

export default Page;