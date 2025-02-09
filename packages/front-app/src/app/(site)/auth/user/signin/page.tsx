'use client';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { SigninFormSchema } from "@/app/lib/definitions";
import type { SignInFormState } from "@/app/lib/type";
import { signIn } from "next-auth/react";

const login = async(state: SignInFormState, formData: FormData): Promise<SignInFormState | undefined> => {
  const email: (string) = formData.get('email')?.toString() || '';
  const password: (string) = formData.get('password')?.toString() || '';

  // バリデーション
  const validatedFields = SigninFormSchema.safeParse({
    email: email,
    password: password,
  })

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const result = signIn("credentials", { email: email, password: password, callbackUrl: '/' });
  console.log(result);
}

const Page = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <>
      <h1>ログインフォーム</h1>

      <div>
        { (typeof state?.errors === 'string') && <p style={{ whiteSpace: 'pre-line' }}>{state.errors}</p> }
      </div>

      <form action={formAction}>

        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          { !(typeof state?.errors === 'string') && state?.errors?.email && <p style={{ whiteSpace: 'pre-line' }}>{state.errors.email}</p> }
          <input
            name='email'
            type="text"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          { !(typeof state?.errors === 'string') && state?.errors?.password && <p style={{ whiteSpace: 'pre-line' }}>{state.errors.password}</p> }
          <input
            name="password"
            type="text"
            id="password"
          />
        </div>

        <div>
          <button>login</button>
        </div>
      </form>

      <Link href={"/auth/user/signup"} className={""}>新規登録</Link>
    </>
  )
}

export default Page;