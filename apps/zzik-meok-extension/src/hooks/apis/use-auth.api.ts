import { apiService } from '@/utils/api-service'
import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query'

export type LoginRequest = {
  userId: string
  password: string
}

type LoginResponse = {
  access_token: string
  refresh_token?: string
  user?: {
    id: number
    userId: string
    email?: string
    name?: string
  }
}

type RefreshRequest = {
  refreshToken: string
}

type LogoutRequest = {
  userId: string
}

type SelectProfileRequest = {
  userId: string
}

export const AuthApiKeys = {
  login: (payload: LoginRequest) => ['auth/login', payload] as const,
  refresh: (payload: RefreshRequest) => ['auth/refresh', payload] as const,
  logout: (payload: LogoutRequest) => ['auth/logout', payload] as const,
  selectProfile: (payload: SelectProfileRequest) => ['auth/profile', payload] as const,
}

export const useLogin = (options?: UseMutationOptions<LoginResponse, Error, LoginRequest>) => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (data) => {
      const [url, payload] = AuthApiKeys.login(data)
      return apiService.post(url, payload)
    },
    ...options,
  })
}

export const useRefresh = () => {
  return useMutation({
    mutationFn: (data: RefreshRequest) => {
      const [url, payload] = AuthApiKeys.refresh(data)
      return apiService.post(url, payload)
    },
  })
}

export const useLogout = () => {
  return useMutation({
    mutationFn: (data: LogoutRequest) => {
      const [url, payload] = AuthApiKeys.logout(data)
      return apiService.post(url, payload)
    },
  })
}

export const useSelectProfile = (data: SelectProfileRequest) => {
  return useQuery({
    queryKey: AuthApiKeys.selectProfile(data),
  })
}
