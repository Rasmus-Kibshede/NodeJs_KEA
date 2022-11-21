<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { global_user } from "../store/globals.js";
    import Profile from "./Profile/Profile.svelte";
  
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
   <slot/>
  {/if}
  