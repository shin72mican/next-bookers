'use client'
import { useFormState } from 'react-dom';
import { SignupFormSchema } from "@/app/lib/definitions";
import type { User } from "@/services/type";
import type { SignUpFormState } from "@/app/lib/type";
import { signIn } from "next-auth/react"
import { redirect } from 'next/navigation'
import { storeUser } from '@/services/auth/user';

const signup = async(state: SignUpFormState, formData: FormData): Promise<SignUpFormState | undefined> => {
  const name: (string) = formData.get('name')?.toString() || '';
  const email: (string) = formData.get('email')?.toString() || '';
  const password: (string) = formData.get('password')?.toString() || '';

  // バリデーション
  const validatedFields = SignupFormSchema.safeParse({
    name: name,
    email: email,
    password: password,
  })

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  if (name && email && password) {
    const user:(User|null) = await storeUser(name, email, password);
    if(user) {
      signIn("credentials", { redirect: false, email: email, password: password });
      redirect('/');
    } else {
      return {
        errors: '入力されたメールアドレスは既に登録されています。',
      } 
    }
  } else {
    return {
      errors: '異常エラー。運営に問い合わせをお願いします。',
    };
  }
}

const Page = () => {
  const [state, formAction] = useFormState(signup, undefined);

  return (
    <>
      <h1>新規登録フォーム</h1>

      <div>
        { (typeof state?.errors === 'string') && <p style={{ whiteSpace: 'pre-line' }}>{state.errors}</p> }
      </div>

      <form action={formAction}>
        <div>
          <label htmlFor="name">User Name</label>
        </div>
        <div>
          { !(typeof state?.errors === 'string') && state?.errors?.name && <p style={{ whiteSpace: 'pre-line' }}>{state.errors.name}</p> }
          <input
            name='name'
            type="text"
            id="name"
          />
        </div>

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
            name='password'
            type="text"
            id="password"
          />
        </div>

        <div>
          <button>signup</button>
        </div>
      </form>
    </>
  )
}

export default Page;