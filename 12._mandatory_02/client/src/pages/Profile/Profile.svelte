<script>
    import Loguout from "../../components/Logout/Loguout.svelte";
import { global_user } from "../../store/globals.js";

    let email;

    global_user.subscribe(user => {
		email = user.email;
	});
</script>

<h1>Welcome {email}</h1>

<style>
</style>
