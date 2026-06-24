import { useEffect, useState } from 'react'
import './App.css'
import  GameCard  from './Components/GameCard.jsx'

const TU_API_KEY = "5a4718d4e45a482e8b934e1d51ce02e6"

function App() {

  const [platform, setPlatform] = useState("")
  const [name, setName] = useState("")
  const [year, setYear] = useState("")
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = () => {
      fetch(`https://api.rawg.io/api/games?key=${TU_API_KEY}&platforms=${platform}`)
        .then(res => res.json())
        .then(data => {
          setData(data)
          console.log(JSON.stringify(data, null, 2))

        })
        .catch(err => console.error(err))
    }

    getData()
  }, [])

  return (

    <>  
      {!data && <p>Cargando...</p>}

      {data && (
        <div className="games-grid">
          {data.results.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </>
  )
}

export default App
