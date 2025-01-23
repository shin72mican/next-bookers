import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

// ログイン
export const POST = async(req: NextRequest) => {
  const { email } = await req.json();
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    }
  });

  return Response.json({
    user: user,
  });
}