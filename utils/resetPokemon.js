import { Solution } from "../components/Solution/Solution";
import { getPokemon } from "./getPokemon";

export const resetPokemon = async () => {
  const newPokemon = await getPokemon();

  const sprite = document.querySelector(".sprite");
  let input = document.querySelector("input");
  const solution = document.querySelector("#solution");

  input.value = "";
  solution.innerHTML = Solution(newPokemon[0]);
  sprite.src = newPokemon[1];
  sprite.classList.add("shadow");
};
