<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { global_user } from "../store/globals.js";

  const navigate = useNavigate();
  const location = useLocation();

  $: if (!$global_user) {
    navigate("/login", {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

{#if $global_user}
  <slot />
{/if}
