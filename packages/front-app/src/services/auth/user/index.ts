'use server'
import { path, userHandleSucceed, handleFailed, hashPassword } from "..";
import type { UserType } from "@/app/lib/type";

// ログインデータ取得
export const getUser = async(email:string, password:string): Promise<UserType|null> => {
  const user: Omit<UserType, 'id'|'name'|'createAt'> = {
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
export const storeUser = async(name:(string), email:string, password:string): Promise<UserType|null> => {
  // パスワードのハッシュ化
  const hashPass:string = await hashPassword(password);
  const user: Omit<UserType, 'id'|'createAt'> = {
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

// セッションユーザーデータ取得
export const getSessionUser = async(email:string): Promise<UserType|null> => {
  const user: Omit<UserType, 'id'|'name'|'password'|'createAt'> = {
    email: email,
  };

  return fetch(path('/api/auth/getSessionUser'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(userHandleSucceed)
  .catch(handleFailed);

}