<script>
	import { each } from 'svelte/internal';
	import { pokemon } from '../stores/data1';
	import Pokemoncard from '../components/pokemoncard.svelte';
	import Sidebar from './Sidebar/sidebar.svelte';

	let searchedpokemon = [{}];
	let search ="";

	$: {
		if (search) {
			searchedpokemon = $pokemon.filter((pokemons) =>
				pokemons.name.toLowerCase().includes(search.toLowerCase()));
		}else {
			searchedpokemon = [...$pokemon];
		}
	}
</script>


<div class="flex">
	<Sidebar {searchedpokemon}/>
	<div class="w-full p-6">
		<h1 class="text-5xl text-center mb-8 font-medium uppercase text-gray-900 font-sans">Pokedex</h1>
		<input
			class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
			type="text"
			placeholder="search"
			bind:value={search}
		/>
		<div class="p-4 grid gap-4 md:grid-cols-6">
			{#each searchedpokemon as pokemons}
				<Pokemoncard {pokemons} />
			{/each}
		</div>
	</div>
</div>
