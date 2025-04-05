import { useSearchParams } from 'react-router'

const ZzikMeokPage = () => {
  const [searchParams] = useSearchParams()

  return (
    <div>
      <h1>찍먹 실행 완료!</h1>
      <p>찍어먹을 주소: {searchParams.get('markingUrl')}</p>
    </div>
  )
}

export default ZzikMeokPage
