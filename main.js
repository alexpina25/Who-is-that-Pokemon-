import "./style.css";

import { Title } from "./components/Title/Title";
import { Sprite } from "./components/Sprite/Sprite";
import { Solution } from "./components/Solution/Solution";
import { Input } from "./components/Input/Input";
import { Streak } from "./components/Streak/Streak";
import { Footer } from "./components/Footer/Footer";

import { getPokemon } from "./utils/getPokemon";
import { checkPokemon } from "./utils/checkPokemon";

let pokemon = await getPokemon();

sessionStorage.setItem("streak", 0);

let streak = sessionStorage.getItem("streak");

const title = document.querySelector("#title");
title.innerHTML = Title();

const sprite = document.querySelector("#sprite");
sprite.innerHTML = Sprite(pokemon[1]);

const solution = document.querySelector("#solution");
solution.innerHTML = Solution(pokemon[0]);

const input = document.querySelector("#input");
input.innerHTML = Input();

const streakDiv = document.querySelector("#streak");
streakDiv.innerHTML = Streak(streak);

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkPokemon();
  }
});
