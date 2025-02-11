import { UserCollection } from '@/app/lib/class/userCollection';
import type { UserType } from '@/app/lib/type';

// export const host = process.env.NEXT_PUBLIC_API_HOST;
export const host = process.env.NEXT_PUBLIC_VERCEL_URL;

export const path = (path?: string) => `${host}${path}`;

class FetchError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
};

/** user一覧 */
export const userListHandleSucceed = async (res: Response) => {
  const data = await res.json();
  // 配列に変換して返却
  const userList:UserType[] = data.user_list;
  const userCollection = new UserCollection();
  userCollection.setUserList = userList;
  if (!res.ok) {
    throw new FetchError(res.statusText, res.status);
  }
  return userCollection;
};
/** end */

/** user 詳細 */
export const userHandleSucceed = async(res: Response) => {
  const data = await res.json();
  // 配列に変換して返却
  const book = {
    book: data.book,
  }
  if (!res.ok) {
    throw new FetchError(res.statusText, res.status);
  }
  return book;
}
/** end */

export const handleFailed = async (err: unknown) => {
  if (err instanceof FetchError) {
    console.warn(err.message);
  }
  throw err;
};