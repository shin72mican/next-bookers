import type { Book } from "@/app/lib/type";

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

/** book一覧 */
export const booksHandleSucceed = async (res: Response) => {
  const data = await res.json();
  // 配列に変換して返却
  const books = data.books
  if (!res.ok) {
    throw new FetchError(res.statusText, res.status);
  }
  return books;
};
/** end */

/** book 詳細 */
export const bookHandleSucceed = async(res: Response) => {
  const data = await res.json();
  // 配列に変換して返却
  const book:Book = data.book;
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