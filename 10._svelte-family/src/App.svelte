<script>
  import Home from "./components/Home/Home.svelte";
  import Parent from "./components/Parent/Parent.svelte";

  const parent = ["Kurt", "Katja"];
  const children = [
    {
      name: "Flemming",
      isGirl: false,
      blackSheep: "ultra",
      bright: false,
    },
    {
      name: "Erik",
      isGirl: false,
      blackSheep: "medium",
      bright: true,
    },
    {
      name: "Ingrid",
      isGirl: true,
      bright: true,
    },
  ];

  const pets = [
    {
      type: "Panda",
      name: "Poh",
    },
    {
      type: "Dinosaur",
      name: "Lille fod",
    },
  ];
</script>

<main>
  <Home>
    <Parent name={parent[0]} {children} {pets} />
    <Parent name={parent[1]} {children} {pets} />
  </Home>
</main>

<style>
</style>
