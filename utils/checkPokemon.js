import { showPokemon } from "./showPokemon";
import { Streak } from './../components/Streak/Streak';

export const checkPokemon = () => {
  const inputValue = document.querySelector("input").value;
  const pokemonName = document.querySelector("#pokemon-name").textContent;

  const streakDiv = document.querySelector("#streak");
  let streak = sessionStorage.getItem("streak");

  if (pokemonName.toLowerCase() === inputValue.toLowerCase()) {
    streak++;
    sessionStorage.setItem("streak", streak);
    streakDiv.innerHTML = Streak(sessionStorage.getItem("streak"));
  } else {
    sessionStorage.setItem("streak", 0);
    streakDiv.innerHTML = Streak(sessionStorage.getItem("streak"));
  }
  showPokemon();
};
