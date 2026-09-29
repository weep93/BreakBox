import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error fetching data:', err))
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React + Python Template</h1>

      {data ? (
        <p>
          Backend says: <strong>{data.message}</strong> (Status: {data.status})
        </p>
      ) : (
        <p>Loading from backend...</p>
      )}
    </div>
  )
}

export default App