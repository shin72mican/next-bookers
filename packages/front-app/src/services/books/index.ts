export const host = process.env.NEXT_PUBLIC_API_HOST;

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
  const books = {
    books: Object.values(data.books)
  }
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