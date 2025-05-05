import URLMap from '@/constants/url-map'
import { useCheckAuth } from '@/hooks/use-check-auth'
import { Navigate, Outlet } from 'react-router'

const AuthRoute = () => {
  const { isAuthenticated, isLoading } = useCheckAuth()

  // 로딩 중일 때는 아무것도 표시하지 않음
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">로딩 중...</div>
  }

  // 인증이 필요한 경로인데 인증되지 않은 경우
  if (!isAuthenticated) {
    return <Navigate to={URLMap.LOGIN} replace />
  }

  return <Outlet />
}

export default AuthRoute
