<script>
  import Home from "./components/Home/Home.svelte";
  import Parent from "./components/Parent/Parent.svelte";

  /*  fetch("http://localhost:8080/api/pokemon")
    .then((res) => res.json())
    .then((result) => console.log(result)); */

  /* import { onMount } from "svelte";

  onMount(async () => {
    const response = await   fetch("http://localhost:8080/api/pokemon");
    const result = response.json();
    console.log(result);
  });
 */

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
