import URLMap from '@/constants/url-map'
import { useLogin } from '@/hooks/apis/use-auth.api'
import { saveTokens } from '@/utils/auth'
import { ClientError } from '@/utils/error'
import { LoginFormData, loginFormSchema } from '@/validations/auth.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, Input } from '@zzik-meok/ui'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const LoginPage = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      userId: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema),
  })

  const { mutateAsync: login, isPending: isLoading } = useLogin()

  const onSubmit = async (data: LoginFormData) => {
    const result = await login(data)

    if (result.accessToken) {
      await saveTokens(result.accessToken, result.refreshToken)
      navigate(URLMap.ZZIK_MEOK, { replace: true })
    } else {
      throw new ClientError('UNKNOWN', '토큰이 없습니다.')
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="아이디"
          type="text"
          className={`mt-1 block w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...register('userId')}
          error={errors.userId}
        />
        <Input
          label="비밀번호"
          type="password"
          className={`mt-1 block w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...register('password')}
          error={errors.password}
        />
        <div className="flex items-center justify-between">
          <Checkbox className="ml-2 block text-sm" label="로그인 상태 유지" />
          <a href="#" className="text-sm text-blue-600 hover:underline">
            비밀번호 찾기
          </a>
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          {isLoading ? '로그인 중...' : '로그인'}
        </Button>
      </form>

      <div className="text-sm text-center mt-4">
        <p className="flex items-center justify-center gap-2">
          <span>계정이 없으신가요?</span>
          <a href="#" className="text-blue-600 hover:underline">
            회원가입
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
