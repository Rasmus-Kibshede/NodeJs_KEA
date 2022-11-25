<script>
    import { get } from "svelte/store";
    import { global_user } from "../../store/globals.js";

    let email = get(global_user).email;
</script>

<h1>Welcome {email}</h1>

<style>
</style>
