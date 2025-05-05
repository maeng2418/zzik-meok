import { useGetCategories } from '@/hooks/apis/use-category-api'
import { runWithBrowser } from '@/utils/webextension'
import { Input, Select } from '@zzik-meok/ui'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'

const ZzikMeokPage = () => {
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    zzikMeokUrl: string
    categoryId: string | undefined
    categoryName: string | undefined
  }>({
    defaultValues: {
      zzikMeokUrl: '',
      categoryId: undefined,
      categoryName: undefined,
    },
    // resolver: zodResolver(loginFormSchema),
  })

  const { data: categories } = useGetCategories()

  useEffect(() => {
    const setZzikMeokUrl = async () => {
      await runWithBrowser(
        (browser) => {
          browser.tabs.query({ active: true, currentWindow: true }).then(([currentTab]) => {
            setValue('zzikMeokUrl', currentTab?.url ?? '')
          })
        },
        () => {
          setValue('zzikMeokUrl', window.location.pathname)
        },
      )
    }

    setZzikMeokUrl()
  }, [setValue])

  const onSubmit = (data: { zzikMeokUrl: string; categoryId?: string }) => {
    console.log(data)
  }

  const categoryOptions = useMemo(() => {
    return (categories ?? [])
      ?.map((category) => ({
        label: category.name,
        value: category.id.toString(),
      }))
      .concat({ label: '직접입력', value: '0' })
  }, [categories])

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="찍먹 URL"
          type="text"
          className={`mt-1 block w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...register('zzikMeokUrl')}
          disabled
          error={errors.zzikMeokUrl}
        />
        <Select
          label="카테고리"
          placeholder="카테고리를 선택해주세요"
          options={categoryOptions}
          {...register('categoryId')}
          error={errors.categoryId}
        />
        {watch('categoryId') === '0' && (
          <Input
            label="카테고리명"
            type="text"
            className={`mt-1 block w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register('categoryName')}
            error={errors.categoryName}
          />
        )}
        <button
          id="zzik-meok-button"
          className="w-full shadow-[0_1px_#ffffffbf_inset] flex justify-center items-center gap-2 text-white text-base not-italic font-semibold leading-6 transition-all duration-[0.2s] ease-[ease-in-out] w-fit cursor-pointer px-[18px] py-[10px] rounded-lg border-[none]"
          onClick={() => {}}
        >
          찍먹하기
        </button>
      </form>
    </div>
  )
}

export default ZzikMeokPage
