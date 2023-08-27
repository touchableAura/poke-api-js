
const POKEMON_API = "https://pokeapi.co/api/v2/";
const ICLUDE_ALL = "pokemon?limit=100000&offset=0";

// getPokemonList 
// get original 151 Pokemon 
export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=100000&offset=0");
    const data = await response.json();
    return data.results;
}

// getPokemon -> given a string "pikachu"

