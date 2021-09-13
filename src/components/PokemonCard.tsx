import usePokemon from "../hooks/usePokemon"

export const PokemonCard = () => {
  const pokemon = usePokemon(1);
  return (
    <div className="flip-card">
      <div className="card-container">
        <div className="pokemon-block">
          <div className="img-container">
            <img src={ pokemon?.sprites.front_default } alt="Foto pokemon" />
          </div>

          <p>
            { pokemon?.id.toString().padStart(3, '0')}
          </p>

          <p className="name">
            { pokemon?.name }
          </p>
        </div>
        <div className="pokemon-block-back">
          
        </div>
      </div>
    </div>
  )
}
