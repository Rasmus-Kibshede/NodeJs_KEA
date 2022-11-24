<script>
    import { BASE_URL } from "../../store/globals.js";
    import { onMount } from "svelte";

    let pokemonList = [];

    onMount(async function () {
        const response = await fetch(`${$BASE_URL}/api/pokemon`);
        const result = await response.json();
        console.log(result.pokemon.results);
        pokemonList = result.pokemon.results;
    });
</script>

<h1>Pokemon page</h1>

{#each pokemonList as pokemon}
    <div>
        <h4>{pokemon.name}</h4>
    </div>
{/each}

<style>
</style>