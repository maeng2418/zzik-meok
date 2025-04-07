import { GotService } from '@zzik-meok/utils/client/node'
import Box from './box'

const HomePage = async () => {
  const apiService = new GotService()
  const data = await apiService.get('users', { foods: [1, 2, 3] })

  return (
    <div>
      <h1>Hello World</h1>
      <p>{JSON.stringify(data)}</p>
      <Box />
    </div>
  )
}
export default HomePage
