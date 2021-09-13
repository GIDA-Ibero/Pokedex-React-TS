import { useEffect, useState, useCallback } from "react";
import { Pokemon } from '../api/PokemonType';
import { httpClient } from '../api/httpClient';

const usePokemon = ( id:string | number ) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined >();
  

  const getPokemonMemo = useCallback(() => {
    const getPokemon = async () => {
      const response = await httpClient.get<Pokemon>(`${id}`);
      const { data: newPokemon } =  response;
      setPokemon( newPokemon );
    }
    getPokemon()
  }, [ id ]);
  
  useEffect(() => {
    getPokemonMemo()
  }, [ getPokemonMemo ])

  return pokemon;
}

export default usePokemon;