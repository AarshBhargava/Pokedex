<script>
	import { each } from "svelte/internal";
  import { pokemon } from '../../stores/data1';
  import pokedexicon from "../../assets/car.png";
  import fire from "../../assets/Group 2846.png";
  import ghost from "../../assets/ghost.png";
  import water from "../../assets/water.png";
  import Modal from "./modal.svelte";
  import electric from "../../assets/electric.png";
  import { fade } from 'svelte/transition';
	import Layout from "../+layout.svelte";
	import Sidebarcard from "./sidebarcard.svelte";

    let showmenu = false;
    let searchtype= "";

  const menu = () => {
      showmenu = !showmenu;
    }

    $: if(searchtype){
          searchedpokemon = $pokemon.filter((pokemons)=>
            pokemons.name.toLowerCase().includes(searchtype.toLowerCase()));
      }
      else{
        searchedpokemon =[...$pokemon];
      }
    
    export let searchedpokemon =[{}];
  </script>
  {#if showmenu == true}
    <div class="w-80 min-h-screen bg-gray-800" >
      <div class="px-6 pt-8">
        <div class="flex items-center justify-between group">
          <a
            href="/"
            class="flex items-center justify-center"
            ><img
              src={pokedexicon}
              alt=""
              class="w-14 flex self-center justify-self-center"
            /></a
          >
          <button
            class="flex items-center justify-center p-0.5 rounded bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 group-hover:scale-100 ease-in"
            on:click={() => {
              showmenu = !showmenu;
            }}
          >
            <svg
              class="w-7 h-7 text-gray-800 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.25 6.75L4.75 12L10.25 17.25"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.25 12H5"
              />
            </svg>
          </button>
        </div>
        <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-gray-500" />
        <div>
          <div class="relative">
            <div class="absolute top-2 left-0 flex items-center pl-2">
              <svg
                class="w-5 h-5 text-gray-500 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                />
              </svg>
            </div>
            <input
              type="text"
              class="w-full rounded pl-8 pr-4 py-2.5 text-xs font-light bg-gray-100 text-gray-900 placeholder-gray-500"
              placeholder="search"
              id="myinput"
              bind:value={searchtype}
            />
          </div>
        </div>
        <div class="pt-10">
          <ul class="flex flex-col text-gray-500 gap-5">
            <a href="pokemon/{pokemon.id}" class="flex align-center gap-5"><img src={fire} class="h-10" alt=""><li class="m-2 text-gray-100 uppercase justify-center">FIRE</li></a>
            <a href="pokemon/{pokemon.id}" class="flex align-center gap-5"><img src={water} class="h-10" alt=""><li class="m-2 text-gray-100 uppercase justify-center">Water</li></a>
            <a href="pokemon/{pokemon.id}" class="flex align-center gap-5"><img src={electric} class="h-10" alt=""><li class="m-2 text-gray-100 uppercase justify-center">electric</li></a>
            <a href="pokemon/{pokemon.id}" class="flex align-center gap-5"><img src={ghost} class="h-10" alt=""><li class="m-2 text-gray-100 uppercase justify-center">Ghost</li></a>
          </ul>
        </div>
        <div>
          <Modal />
        </div>
      </div>
    </div>
  {:else}
    <div class="w-20 min-h-screen bg-gray-800">
      <div class="px-6 pt-8">
        <div class="flex items-center justify-between">
          <a
            href="https://www.google.com"
            class="flex items-center justify-center"
            ><img
              src={pokedexicon}
              alt=""
              class="w-5 flex self-center justify-self-center"
            />
          </a>
          <button
            class="flex items-center justify-center p-0.5 rounded bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 group-hover:scale-100"
            on:click={menu}
          >
            <svg
              class="w-7 h-7 text-gray-800 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.25 6.75L4.75 12L10.25 17.25"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.25 12H5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="pt-2 flex flex-col justify-center items-center gap-5">
          <img src={fire} on:click={menu} class="h-14 mt-6 hover:opacity-3 cursor-pointer" alt="fire">
          <img src={water} on:click={menu} class='h-14 cursor-pointer' alt='water'>
          <img src={electric} on:click={menu} class='h-14 cursor-pointer' alt="electric">
          <img src={ghost} on:click={menu} class='h-14 cursor-pointer' alt="ghost">
      </div>
    </div>
  {/if}

  