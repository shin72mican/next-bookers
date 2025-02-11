import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server"
import type { Book } from "@/lib/type";

// 本一覧データ取得
export const GET = async() => {
  const books:Book[] = await prisma.book.findMany();
  return Response.json({
    books: books,
  });
}

// 投稿データの保存
export const POST = async(req: NextRequest) => {
  const reqData: Omit<Book, 'id'|'createAt'> = await req.json();
  const books:Book[] = await prisma.book.findMany();
  try {
    console.log("save-start");
    await prisma.book.create({
      data: {
        userId: reqData.userId,
        title: reqData.title,
        body: reqData.body,
      } 
    });
    console.log("save-end");
    return Response.json({
      books: books ?? null,
    });
  } catch (err) {
    console.log("save-failed");
    console.log(err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}