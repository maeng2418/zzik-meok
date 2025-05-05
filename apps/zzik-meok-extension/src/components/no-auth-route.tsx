import URLMap from '@/constants/url-map'
import { useCheckAuth } from '@/hooks/use-check-auth'
import { Navigate, Outlet } from 'react-router'

const NoAuthRoute = () => {
  const { isAuthenticated, isLoading } = useCheckAuth()

  // 로딩 중일 때는 아무것도 표시하지 않음
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">로딩 중...</div>
  }

  // 인증이 필요없는 경로인데 이미 인증된 경우 (로그인, 홈 페이지 등)
  if (isAuthenticated) {
    return <Navigate to={URLMap.ZZIK_MEOK} replace />
  }

  return <Outlet />
}

export default NoAuthRoute
