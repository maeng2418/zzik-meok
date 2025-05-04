import { useCreateCategory } from '@/hooks/apis/use-category-api'
import { CreateCategoryFormData, createCategoryFormSchema } from '@/validations/category.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@zzik-meok/ui'
import { useForm } from 'react-hook-form'

const CreateCategoryPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCategoryFormData>({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(createCategoryFormSchema),
  })

  const { mutateAsync: createCategory, isPending: isLoading } = useCreateCategory()

  const onSubmit = async (data: CreateCategoryFormData) => {
    try {
      await createCategory(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="카테고리 명"
          type="text"
          className={`mt-1 block w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...register('name')}
          error={errors.name}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          {isLoading ? '생성 중...' : '만들기'}
        </Button>
      </form>
    </div>
  )
}

export default CreateCategoryPage
