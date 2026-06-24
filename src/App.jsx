import { useState } from 'react'
import GameCard from './Components/GameCard'
import './App.css'

const TU_API_KEY = "5a4718d4e45a482e8b934e1d51ce02e6"

function App() {

  const [platform, setPlatform] = useState("")
  const [name, setName] = useState("")
  const [year, setYear] = useState("")
  const [data, setData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    let url = `https://api.rawg.io/api/games?key=${TU_API_KEY}`

    if (platform) url += `&platforms=${platform}`
    if (name) url += `&search=${name}`
    if (year) url += `&dates=${year}-01-01,${year}-12-31`

    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit} class="form">
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="">Todas las plataformas</option>
          <option value="4">PC</option>
          <option value="18">PlayStation 4</option>
          <option value="187">PlayStation 5</option>
          <option value="1">Xbox One</option>
          <option value="7">Nintendo Switch</option>
        </select>

        <input 
          type="text"
          placeholder="Nombre del juego"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="number"
          placeholder="Año"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

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
