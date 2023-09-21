import { useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  const handleFetchPokemon = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    setPokemons(response.data.results);
  };

  return (
    <div className="pokemon">
      <button onClick={handleFetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
