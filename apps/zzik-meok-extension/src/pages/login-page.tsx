import { useLogin } from '@/hooks/apis/use-auth.api'
import { LoginFormData, loginFormSchema } from '@/validations/auth.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, Input, Label } from '@zzik-meok/ui'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
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

  const { isPending: isLoading, mutateAsync: login } = useLogin()

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await login(data)

      if (result.access_token) {
        localStorage.setItem('access_token', result.access_token)

        console.log('로그인 성공:', result)
      } else {
        throw new Error('토큰이 없습니다.')
      }
    } catch (error) {
      console.error('로그인 오류:', error)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            아이디
          </Label>
          <Input
            id="userId"
            type="text"
            className={`mt-1 block w-full rounded-md border ${
              errors.userId ? 'border-red-500' : 'border-gray-300'
            } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register('userId', {
              required: '아이디를 입력해주세요',
            })}
          />
          {errors.userId && <p className="mt-1 text-sm text-red-500">{errors.userId.message}</p>}
        </div>

        <div>
          <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
            비밀번호
          </Label>
          <Input
            id="password"
            type="password"
            className={`mt-1 block w-full rounded-md border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              minLength: {
                value: 6,
                message: '비밀번호는 최소 6자 이상이어야 합니다',
              },
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox id="remember" className="ml-2 block text-sm text-gray-700" />
            <Label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              로그인 상태 유지
            </Label>
          </div>
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

      <div className="text-sm text-center">
        <p>
          계정이 없으신가요?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            회원가입
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
