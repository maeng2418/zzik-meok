import { useCreateUser } from '@/hooks/apis/use-user-api'
import { SignUpFormData, signUpFormSchema } from '@/validations/user.validationt'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@zzik-meok/ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const SignUpPage = () => {
  const navigate = useNavigate()
  const [signUpError, setSignUpError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: '',
      userId: '',
      password: '',
      passwordConfirm: '',
      email: '',
      phone: '',
    },
    resolver: zodResolver(signUpFormSchema),
  })

  const { mutateAsync: createUser, isPending: isLoading } = useCreateUser()

  const onSubmit = async (data: SignUpFormData) => {
    try {
      setSignUpError(null)

      const { passwordConfirm: _, ...userData } = data

      // 회원가입 API 호출
      await createUser(userData)

      // 가입 성공 후 로그인 페이지로 이동
      navigate('/login')
    } catch (error: any) {
      console.error('회원가입 오류:', error)
      if (error.response?.data?.message) {
        setSignUpError(error.response.data.message)
      } else {
        setSignUpError('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    }
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>

      {signUpError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{signUpError}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="이름"
          type="text"
          className="mt-1 block w-full rounded-md px-3 py-2"
          {...register('name')}
          error={errors.name}
        />

        <Input
          label="아이디"
          type="text"
          className="mt-1 block w-full rounded-md px-3 py-2"
          {...register('userId')}
          error={errors.userId}
        />

        <Input
          label="비밀번호"
          type="password"
          className="mt-1 block w-full rounded-md px-3 py-2"
          {...register('password')}
          error={errors.password}
        />

        <Input
          label="비밀번호 확인"
          type="password"
          className="mt-1 block w-full rounded-md px-3 py-2"
          {...register('passwordConfirm')}
          error={errors.passwordConfirm}
        />

        <Input
          label="이메일"
          type="email"
          className="mt-1 block w-full rounded-md px-3 py-2"
          {...register('email')}
          error={errors.email}
        />

        <Input
          label="전화번호 (예: 010-1234-5678)"
          type="tel"
          className="mt-1 block w-full rounded-md px-3 py-2"
          {...register('phone')}
          error={errors.phone}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          {isLoading ? '가입 중...' : '가입하기'}
        </Button>
      </form>

      <div className="text-sm text-center mt-6">
        <p className="flex items-center justify-center gap-2">
          <span>이미 계정이 있으신가요?</span>
          <a href="/login" className="text-blue-600 hover:underline">
            로그인하기
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
