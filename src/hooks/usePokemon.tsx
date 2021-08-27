import { useEffect, useState } from "react";
import { Pokemon } from '../api/PokemonType';
import { httpClient } from '../api/httpClient';

const usePokemon = ( id:string ) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined >();
  
  const getPokemon = async () => {
    const response = await httpClient.get<Pokemon>(`${id}`);
    const { data } =  response;
    setPokemon( data )
  }
}

export default usePokemon;