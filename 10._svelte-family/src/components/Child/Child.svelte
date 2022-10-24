<script>
    import { each } from "svelte/internal";
    import Pet from "../Pet/Pet.svelte";

    export let child;
    export let pets;
</script>

<p>Name: {child.name}</p>


<h3>Pets</h3>
<p>🡫</p>
{#each pets as pet}
    <Pet pet={pet}/>
{/each}
<p>------------</p>