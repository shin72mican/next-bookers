export const host = process.env.NEXT_PUBLIC_API_HOST;

export const path = (path?: string) => `${host}${path}`;

class FetchError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
};

export const handleSucceed = async (res: Response) => {
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

export const handleFailed = async (err: unknown) => {
  if (err instanceof FetchError) {
    console.warn(err.message);
  }
  throw err;
};