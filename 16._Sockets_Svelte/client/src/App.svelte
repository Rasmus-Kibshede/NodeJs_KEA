<script>
  import { onMount } from "svelte";
  import Colors from "./pages/colors/Colors.svelte";
  import Register from "./pages/register/Register.svelte";
  import { BASE_URL } from "./store/globalStore.js";

  let loggedinUser;

  onMount(async () => {
    const response = await fetch(`${$BASE_URL}/me`, { credentials: "include" });
    const { data } = await response.json();
    loggedinUser = data;
  });
</script>

{#if loggedinUser}
  <Colors />
{:else}
  <Register />
{/if}
