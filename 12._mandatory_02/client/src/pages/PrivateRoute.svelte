<script>
    import { Route } from "svelte-navigator";
    import PrivateRouteGuard from "./PrivateRouteGuard.svelte";
    import { global_user } from "../store/globals.js";
    import Login from "../components/Login/Login.svelte";

    export let path;
    export let component;

    $: isAuthenticated = $global_user;
</script>

{#if isAuthenticated}
    <Route {path} {component} />
{:else}
    <Route {path} component={Login} />
{/if}
