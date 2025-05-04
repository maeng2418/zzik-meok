import { z } from 'zod'

export const createCategoryFormSchema = z.object({
  name: z
    .string()
    .nonempty('카테고리명을 입력해주세요.')
    .max(100, '카테고리명은 최대 100자입니다.'),
})

export type CreateCategoryFormData = z.infer<typeof createCategoryFormSchema>
