import { apiService } from '@/utils/api-service'
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query'

export type CreateUserRequest = {
  name: string
  phone: string
  userId: string
  password: string
  email: string
}

export type User = {
  id: number
  userId: string
  name: string
  email: string
  phone: string
  created_at: string
  updated_at: string
}

export const UserApiKeys = {
  createUser: (payload: CreateUserRequest) => ['users/register', payload] as const,
  getProfile: () => ['users/profile'] as const,
  getById: (id: number) => [`users/${id}`] as const,
}

export const useCreateUser = (options?: UseMutationOptions<User, Error, CreateUserRequest>) => {
  return useMutation<User, Error, CreateUserRequest>({
    mutationFn: (data) => {
      const [url, payload] = UserApiKeys.createUser(data)
      return apiService.post(url, payload)
    },
    ...options,
  })
}

export const useGetProfile = (options?: UseQueryOptions<User>) => {
  return useQuery<User>({
    queryKey: UserApiKeys.getProfile(),
    retry: false,
    ...options,
  })
}

export const useGetUser = (id: number, options?: UseQueryOptions<User>) => {
  return useQuery<User>({
    queryKey: UserApiKeys.getById(id),
    enabled: !!id,
    ...options,
  })
}
