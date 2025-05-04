import { z } from 'zod'

export const signUpFormSchema = z
  .object({
    name: z.string().nonempty('이름을 입력해주세요.'),
    userId: z
      .string()
      .nonempty('아이디를 입력해주세요.')
      .min(4, '아이디는 최소 4자 이상이어야 합니다.'),
    password: z
      .string()
      .nonempty('비밀번호를 입력해주세요.')
      .min(6, '비밀번호는 최소 6자 이상이어야 합니다.'),
    passwordConfirm: z.string().nonempty('비밀번호 확인을 입력해주세요.'),
    email: z.string().nonempty('이메일을 입력해주세요.').email('올바른 이메일 형식이 아닙니다.'),
    phone: z
      .string()
      .nonempty('전화번호를 입력해주세요.')
      .regex(/^\d{3}-\d{3,4}-\d{4}$|^\d{2,3}-\d{3,4}-\d{4}$/, '올바른 전화번호 형식이 아닙니다.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  })

export type SignUpFormData = z.infer<typeof signUpFormSchema>
