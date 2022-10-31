<script>
    import Pet from "../Pet/Pet.svelte";
    import { fridgeMessageStore } from "../../store/frigdeBulletStore.js";

    export let child;
    export let pets;
    export let onTellILoveYou;
    export let onAlwaysSayHi;
    export let parentName;

    let fridgeMessage = "";

    function handleWriteMessage() {
        fridgeMessageStore.update((currentMessage) => {
            return currentMessage + "\n" + `${fridgeMessage}`;
        });
        fridgeMessage = "";
    }
</script>

<div class:bright={child.bright} class={child.blackSheep || "not-a-black-sheep"}>
    <p>Name: {child.name}</p>

    <input
        bind:value={fridgeMessage}
        type="text"
        placeholder="Write a message"
    />
    <button on:click={handleWriteMessage}>Write a message</button>

    <button on:click={onTellILoveYou(`I love you, ${parentName}`)}
        >Whipser in parents' ear</button
    >
    <button on:click={onAlwaysSayHi}>Greet</button>

    <h3>Pets</h3>
    <p>🡫</p>
    {#each pets as pet}
        <Pet {pet} />
    {/each}
    <p>------------</p>
</div>


<style>

    .bright{
        border:solid 2px yellow;
    }

    .ultra{
        background-color: black;
    }

    .medium{
        background-color: gray;
    }

    .not-a-black-sheep{
        background-color: aquamarine;
    }

</style>
