<script>
	import Sidebar from "./Sidebar/sidebar.svelte";
</script>
<slot>
    <Sidebar searchedpokemon={[]}/>
</slot>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>