import { prisma } from "@/lib/prisma";
import type { UserType } from "@/lib/type";

export const GET = async() => {
  const userList:Omit<UserType, 'books'>[] = await prisma.user.findMany();
  return Response.json({
    user_list: userList,
  })
}