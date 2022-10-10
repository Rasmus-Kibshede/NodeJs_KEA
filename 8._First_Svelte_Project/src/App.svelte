<script>
  const name = "Rasmus";
  const age = 29;
  const currentDate = new Date().toDateString();
</script>

<h2 id="page-title">First svelte project</h2>
<div>More content for {name} that is {age} <p>{currentDate}</p></div>

<style>
  #page-title {
    color: blue;
  }
</style>
