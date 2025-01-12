import { z } from 'zod'

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '名前は2文字以上で登録する必要があります。' })
    .trim(),
  email: z
    .string()
    .email({ message: '有効なメールアドレスで登録してください。' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'パスワードは8文字以上で登録する必要があります。' })
    .regex(/[a-zA-Z]/, { message: "'a-zA-Z'のうち少なくとも1文字含める必要があります。" })
    .regex(/[0-9]/, { message: "'0-9'のうち少なくとも1文字含める必要があります。" })
    .regex(/[^a-zA-Z0-9]/, {
      message: '少なくとも 1文字の特殊文字を含める必要があります。',
    })
    .trim(),
})