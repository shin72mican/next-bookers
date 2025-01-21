'use client'
import { useFormState } from 'react-dom';
import { SigninFormSchema } from "@/app/lib/definitions";
import type { SignInFormState } from "@/app/lib/type";
import { signIn, useSession  } from "next-auth/react"
import { redirect } from 'next/navigation'

const login = async(state: SignInFormState, formData: FormData): Promise<SignInFormState | undefined> => {
  const name: (string) = formData.get('name')?.toString() || '';
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

  signIn("credentials", { email: email, password: password, callbackUrl: '/' });
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
    </>
  )
}

export default Page;