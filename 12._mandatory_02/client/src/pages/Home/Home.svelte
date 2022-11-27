<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globals.js";

    // @ts-ignore
    let pokemonCount;

    async function fetchPokemon() {
        const respose = await fetch(`${$BASE_URL}/api/pokemon`);
        const result = await respose.json();

        pokemonCount = result.pokemon.count;
    }

    onMount(fetchPokemon);
</script>

<h1>Welcome trainer</h1>

<p>This is a website for the best trainers</p>

<h4>Total pokemon count: {pokemonCount}</h4>

<style>
</style>
