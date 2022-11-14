<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globals";

    let animals = [];

    async function fetchAnimals() {
        const response = await fetch(`${BASE_URL}/api/animals`);
        const data = await response.json();
        console.log(data);
        animals = data.data;
    }
    onMount(fetchAnimals);
</script>

{#each animals as animal}
    <p>{animal}</p>
{/each}

<h3>TODO... Animals here</h3>
