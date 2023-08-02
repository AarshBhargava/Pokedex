<script>
    export let name ="pokemon";
    export let imag= "";
    export let id = "/1"; 
</script>

<div>
    <a href="pokemon/{id}" class="flex align-center gap-5"><img src={imag} class="h-10" alt=""><li class="m-2 text-gray-100 uppercase justify-center">{name}</li></a>
</div>