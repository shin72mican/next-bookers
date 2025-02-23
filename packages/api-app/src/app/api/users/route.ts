import { prisma } from "@/lib/prisma";

export const GET = async() => {
  const userList = await prisma.user.findMany();
  return Response.json({
    user_list: userList,
  })
}