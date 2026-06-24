import '../App.css'

function GameCard({ game }) {
  return (
    <div className="game-card">
      <div className="game-card-image">
        <img 
          src={game.background_image} 
          alt={game.name}
          loading="lazy"
        />
      </div>
      <div className="game-card-content">
        <h3>{game.name}</h3>
        
        <div className="rating">
          ⭐ {game.rating.toFixed(1)}
        </div>

        <div className="divider"></div>

        <p>
          <strong>Lanzamiento:</strong> {new Date(game.released).toLocaleDateString('es-ES')}
        </p>

        <p>
          <strong>Plataformas:</strong> {game.platforms.map(p => p.platform.name).join(", ")}
        </p>

        <div className="spacer"></div>
      </div>
    </div>
  )
}

export default GameCard