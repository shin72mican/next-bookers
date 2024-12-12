import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server"

// 本一覧データ取得
export const GET = async() => {
  const books = await prisma.book.findMany();
  return Response.json({
    books: books.map(({...books}) => ({
      ...books
    })),
  });
}

// 
export const POST = async(req: NextRequest) => {
  const { title, body } = await req.json();
  try {
    console.log("save-start");
    await prisma.book.create({
      data: {
        title: title,
        body: body,
      },
    });
    console.log("save-success");
    return Response.json({ status: 201 });
  } catch (err) {
    console.log("save-failed");
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}