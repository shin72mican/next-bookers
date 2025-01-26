import { prisma } from "@/lib/prisma";
import { NextRequest } from 'next/server';

type Props = {
  params: { bookId: string }
}

export const GET = async(
  request: Request, 
  { params }: Props) => {
  console.log(params.bookId);
  const book = await prisma.book.findUnique({
    where: {
      id: params.bookId,
    }
  });
  console.log(book);
  return Response.json({
    book: book,
  });
}

export const PATCH = async(
  req: NextRequest,
  { params }: Props) => {
    const { title, body } = await req.json();
    try {
      await prisma.book.update({
        where: { id: params.bookId },
        data: {
          title: title,
          body: body,
        }
      });
      return Response.json({ status: 201 });
    } catch (err) {
      console.log('update failed');
      return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export const DELETE = async(
  req: NextRequest,
  { params }: Props
) => {
  try {
    await prisma.book.delete({
      where: {
        id: params.bookId,
      },
    });
    
  } catch (err) {
    console.log('delete failed');
    console.log(err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

// middlewareの設定がなければpatchを行ったとき
// export const OPTIONS = async(
//   req: NextRequest,
//   { params }: Props
// ) => {
//   console.log(params.bookId);
// };