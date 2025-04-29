import { z } from 'zod'

export const loginFormSchema = z.object({
  userId: z.string().min(4, '아이디는 최소 4자 이상이어야 합니다'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
})

export type LoginFormData = z.infer<typeof loginFormSchema>
