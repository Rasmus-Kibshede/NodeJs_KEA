<script>
    import Child from "../Child/Child.svelte";

    export let name;
    export let children;
    export let pets;
</script>

<h1>Parent: {name}</h1>

<h2>children</h2>
{#each children  as child}
    <Child child={child} pets={pets}/>
{/each}
