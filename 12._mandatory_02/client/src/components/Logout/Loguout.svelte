<script>
    import { BASE_URL, global_user } from "../../store/globals.js";

    //TODO make logout
    function handleLogout() {
        $global_user = null;
        // call backend and invalidate the session
    }
</script>

<button id="button_logout" on:click={handleLogout}>Logout</button>

<style>
</style>
