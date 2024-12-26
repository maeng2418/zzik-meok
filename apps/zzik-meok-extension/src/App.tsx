import KyService from '@zzik-meok/utils/client/kyService'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchKyData = async () => {
      const apiService = new KyService()
      const data = await apiService.get('users', { foods: [1, 2, 3] })
      console.log(data)
      return data
    }

    fetchKyData()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer noopener">
          Vite logo
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          logo react
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
