export const getPokemon = async () => {
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";

  const limit = 151;

  const myPokemon = [];

  let randomID = Math.floor(Math.random() * limit) + 1;

  const data = await fetch(`${baseURL}${randomID}`);
  const dataJSON = await data.json();

  const {
    name,
    sprites: { front_default },
  } = dataJSON;

  myPokemon.push(name);
  myPokemon.push(front_default);
  return myPokemon;
};
