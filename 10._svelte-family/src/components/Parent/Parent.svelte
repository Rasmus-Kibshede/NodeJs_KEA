<script>
    import Child from "../Child/Child.svelte";
    import { fridgeMessageStore } from "../../store/frigdeBulletStore.js";

    export let name;
    export let children;
    export let pets;

    function handleAlwaysSayHi() {
        console.log("Hi");
    }

    function handleTellILoveYou(message) {
        console.log(message);
    }

    function handleEraseFridgeBulletin() {
        fridgeMessageStore.set("Write your message...");
    }
</script>

<h1>Parent: {name}</h1>

<p class="erase-fridge-bulletin-p" on:click={handleEraseFridgeBulletin} on:keydown={() => {}}>
    Erase the fridge bulletin
</p>

<h2>children</h2>
{#each children as child}
    <Child
        {child}
        {pets}
        parentName={name}
        onTellILoveYou={handleTellILoveYou}
        onAlwaysSayHi={handleAlwaysSayHi}
    />
{/each}


<style>
    .erase-fridge-bulletin-p{
        
    }
</style>