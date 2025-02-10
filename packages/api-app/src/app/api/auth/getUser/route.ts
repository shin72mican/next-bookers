import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { checkPassword } from "@/services/auth";

// 新規登録
export const POST = async(req: NextRequest) => {
  const { email, password } = await req.json();
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    }
  });

  // パスワードの比較
  if(user) {
    if (await checkPassword(password, user.password)) {
      return Response.json({
        user: user,
      });
    } else {
      return Response.json({
        // user: user,
        user: null,
      });
    }
  }
  
  return Response.json({
    user: user,
  });
}

// // ログイン
// export const GET = async(req: NextRequest) => {
//   const { email, password } = await req.json();
//   const user = await prisma.user.findFirst({
//     where: {
//       email: email,
//     }
//   });

//   // パスワードの比較
//   if(user) {
//     if (await checkPassword(password, user.password)) {
//       return Response.json({
//         user: user,
//       });
//     }
//   }

//   // パスワード不一致の時、null返す
//   return Response.json({
//     user: null,
//   })
// }