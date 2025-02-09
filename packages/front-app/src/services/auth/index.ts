import bcrypt from 'bcrypt';
import type { User } from "../type";

// export const host = process.env.NEXT_PUBLIC_API_HOST;
export const host = process.env.NEXT_PUBLIC_VERCEL_URL;

export const path = (path?: string) => `${host}${path}`;

const saltRounds = 10;  // ソルトのラウンド数を指定

class FetchError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
};

/** user 情報 */
export const userHandleSucceed = async(res: Response)  => {
  const data = await res.json();
  if (!res.ok) {
    throw new FetchError(res.statusText, res.status);
  }
  // 配列に変換して返却
  // const user:User = data.user;
  const user = {
    user: data.user,
    // error: data.error
  }
  return user ?? null;
}

export const handleFailed = async (err: unknown) => {
  if (err instanceof FetchError) {
    console.warn(err.message);
  }
  throw err;
};

// パスワードのハッシュ化
export const hashPassword = async (password: string): Promise<string> => {
  'use server'; // ←フロント側でbcrypt使うのに必要
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = bcrypt.hash(password, salt);
  return hash;
};