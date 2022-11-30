import { resetPokemon } from "./resetPokemon";

export const showPokemon = () => {
  

  const sprite = document.querySelector(".sprite");
  sprite.classList.remove("shadow");

  const solutionName = document.querySelector("#pokemon-name");
  solutionName.classList.remove("hidden");
  solutionName.classList.add("visible");
  setTimeout(() => resetPokemon(), 2000);
};
