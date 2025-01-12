'use server'
import { path, userHandleSucceed, handleFailed, hashPassword } from "..";
import { SignupFormSchema } from "@/app/lib/definitions";
import type { User } from "../../type";
import type { SignUpFormState } from "@/app/lib/type";
// import { signIn } from "next-auth/react"

// ログインデータ取得
export const getUser = async(email:string, password:string): Promise<User|null> => {
  const user: Omit<User, 'id'|'name'|'createAt'> = {
    email: email,
    password: password,
  };

  return fetch(path('/api/auth/getUser'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(userHandleSucceed)
  .catch(handleFailed);

}

// 新規登録処理
const storeUser = async(name:(string), email:string, password:string): Promise<User|null> => {
  // パスワードのハッシュ化
  const hashPass:string = await hashPassword(password);

  const user: Omit<User, 'id'|'createAt'> = {
    name: name,
    email: email,
    password: hashPass,
  };

  return await fetch(path('/api/auth/storeUser'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(userHandleSucceed)
  .catch(handleFailed);
}

export const signup = async(state: SignUpFormState, formData: FormData): Promise<SignUpFormState | undefined> => {
  const name: (string|undefined) = formData.get('name')?.toString();
  const email: (string|undefined) = formData.get('email')?.toString();
  const password: (string|undefined) = formData.get('password')?.toString();
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

  return undefined;

  // if (name && email && password) {
  //   // const user:(User|null) = await storeUser(name, email, password);

  //   // if(user) {
  //   //   signIn("credentials", { email: formData.get('email'), password: formData.get('password') });
  //   // } else {
  //   //   return {
  //   //     errors: '既に登録されているメールアドレスです。',
  //   //   } 
  //   // }
  //   // return {
  //   //   errors: '',
  //   // };
  // } else {
  //   // return {
  //   //   errors: '名前、メールアドレス、パスワード何れかが入力されていません。',
  //   // };
  // }
  return undefined;
}
