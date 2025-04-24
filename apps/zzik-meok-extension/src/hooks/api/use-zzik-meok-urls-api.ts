import { useQuery } from '@tanstack/react-query'

export const ZzikMeokUrlsApiKeys = {
  selectHello: () => [''] as const,
  createZzikMeok: () => [] as const,
}

export const useCreateZzikMeokUrl = () => {
  return useQuery({
    queryKey: ZzikMeokUrlsApiKeys.selectHello(),
  })
}
