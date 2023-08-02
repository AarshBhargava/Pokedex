import { onMount } from "svelte";
import { writable, derived } from "svelte/store";

export const pokemon = writable([]);
const pokemonDetails = {};

const fetchpokemon = async () =>{
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
    const res = await fetch(url);
    const data = await res.json();
    const fetcheddata = data.results.map((data, index) =>{
        return {
        name:  data.name,
        id: index+1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
    };
    });
    pokemon.set(fetcheddata);
};
fetchpokemon();

