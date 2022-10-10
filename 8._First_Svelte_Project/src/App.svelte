<script>
    import Date from "./components/Date.svelte";

  const name = "Rasmus";
  const age = 29;
</script>

<h2 id="page-title">First svelte project</h2>
<div>More content for {name} that is {age}</div>
<Date></Date>
<style>
  #page-title {
    color: blue;
  }
</style>
