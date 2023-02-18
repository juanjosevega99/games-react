import { useState } from "react";

const POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidoran♀",
  "nidorina",
  "nidoqueen",
  "nidoran♂",
  "nidorino",
  "nidoking",
  "clefairy",
  "clefable",
  "vulpix",
  "ninetales",
  "jigglypuff",
  "wigglytuff",
  "zubat",
  "golbat",
  "oddish",
  "gloom",
  "vileplume",
  "paras",
  "parasect",
  "venonat",
  "venomoth",
  "diglett",
  "dugtrio",
  "meowth",
  "persian",
  "psyduck",
  "golduck",
  "mankey",
  "primeape",
  "growlithe",
  "arcanine",
  "poliwag",
  "poliwhirl",
  "poliwrath",
  "abra",
  "kadabra",
  "alakazam",
  "machop",
  "machoke",
  "machamp",
  "bellsprout",
  "weepinbell",
  "victreebel",
  "tentacool",
  "tentacruel",
  "geodude",
  "graveler",
  "golem",
  "ponyta",
  "rapidash",
  "slowpoke",
  "slowbro",
  "magnemite",
  "magneton",
  "farfetch'd",
  "doduo",
  "dodrio",
  "seel",
  "dewgong",
  "grimer",
  "muk",
  "shellder",
  "cloyster",
  "gastly",
  "haunter",
  "gengar",
  "onix",
  "drowzee",
  "hypno",
  "krabby",
  "kingler",
  "voltorb",
  "electrode",
  "exeggcute",
  "exeggutor",
  "cubone",
  "marowak",
  "hitmonlee",
  "hitmonchan",
  "lickitung",
  "koffing",
  "weezing",
  "rhyhorn",
  "rhydon",
  "chansey",
  "tangela",
  "kangaskhan",
  "horsea",
  "seadra",
  "goldeen",
  "seaking",
  "staryu",
  "starmie",
  "mr. mime",
  "scyther",
  "jynx",
  "electabuzz",
  "magmar",
  "pinsir",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function Pokemon() {
  const [hasWon, toggleWon] = useState(false);

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();

    const { pokemon } = event.currentTarget;

    if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
      toggleWon(true);
      alert("You won!");
    } else {
      alert("Wrong answer");
    }
  }

  return (
    <div>
      <img
        height={512}
        width={512}
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : "brightness(0) invert(1)",
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        alt=""
      />
      {hasWon ? (
        <button style={{ width: "100%" }} onClick={() => location.reload()}>
          Play again
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input autoFocus type="text" name="pokemon" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
