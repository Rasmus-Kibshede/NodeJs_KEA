<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { global_user, BASE_URL } from "../../store/globals.js";

    const navigate = useNavigate();
    const location = useLocation();

    //TODO make logout
    async function handleLogout() {
        $global_user = null;
        await fetch(`${$BASE_URL}/logout`);
        // @ts-ignore
        toastr.success("Logged out", "You are now logged out");
    }
</script>

<button id="button_logout" on:click={handleLogout}>Logout</button>

<style>
</style>
