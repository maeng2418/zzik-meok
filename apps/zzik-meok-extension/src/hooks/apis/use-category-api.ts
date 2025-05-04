import { apiService } from '@/utils/api-service'
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query'

export type CreateCategoryRequest = {
  name: string
  // userId는 서버 측에서 JWT 토큰에서 자동으로 가져오므로 클라이언트에서는 전송하지 않습니다.
}

export type PatchCategoryRequest = {
  name: string
}

export type Category = {
  id: number
  name: string
  user_id: number
  created_at: string
  updated_at: string
  urls?: string[]
}

export const CategoryApiKeys = {
  getAll: () => ['categories'] as const,
  getById: (id: number) => [`categories/${id}`] as const,
  create: (payload: CreateCategoryRequest) => ['categories/create', payload] as const,
  patch: (id: number, payload: PatchCategoryRequest) => [`categories/${id}`, payload] as const,
  delete: (id: number) => [`categories/${id}`] as const,
}

export const useGetCategories = (options?: UseQueryOptions<Category[]>) => {
  return useQuery<Category[]>({
    queryKey: CategoryApiKeys.getAll(),
    ...options,
  })
}

export const useGetCategory = (id: number, options?: UseQueryOptions<Category>) => {
  return useQuery<Category>({
    queryKey: CategoryApiKeys.getById(id),
    enabled: !!id,
    ...options,
  })
}

export const useCreateCategory = (
  options?: UseMutationOptions<Category, Error, CreateCategoryRequest>,
) => {
  return useMutation<Category, Error, CreateCategoryRequest>({
    mutationFn: (data) => {
      const [url, payload] = CategoryApiKeys.create(data)
      return apiService.post(url, payload)
    },
    ...options,
  })
}

export const useUpdateCategory = (
  options?: UseMutationOptions<Category, Error, { id: number; data: PatchCategoryRequest }>,
) => {
  return useMutation<Category, Error, { id: number; data: PatchCategoryRequest }>({
    mutationFn: (data) => {
      const [url, payload] = CategoryApiKeys.patch(data.id, data.data)
      return apiService.patch(url, payload)
    },
    ...options,
  })
}

export const useDeleteCategory = (options?: UseMutationOptions<void, Error, number>) => {
  return useMutation<void, Error, number>({
    mutationFn: (id) => {
      const [url] = CategoryApiKeys.delete(id)
      return apiService.delete(url)
    },
    ...options,
  })
}
