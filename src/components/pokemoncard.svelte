<script>
    import { fade } from 'svelte/transition';
    export let pokemons;
        
    </script>
<a class="list-none p-6 bg-gray-300 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/${pokemons.id}`} transition:fade>
        <img class="h-40 w-40 " src={pokemons.image} alt={pokemons.name}/>
        <h2 class="uppercase text-2xl font-sans">{pokemons.name}</h2>
</a>