import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server"

export const POST = async(req: NextRequest) => {
  const { name, email, password } = await req.json();
  
}