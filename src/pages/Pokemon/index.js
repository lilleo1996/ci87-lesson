import { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchPokemon = () => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemons(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleFetchPokemon();
  }, []);

  return (
    <div className="pokemon">
      {isLoading && <h4>Loading...</h4>}
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
