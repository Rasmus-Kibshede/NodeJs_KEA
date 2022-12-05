<script>
    import {BASE_URL} from "../../store/globalStore.js";
    let username = "";

    async function submitRegistration() {
        fetch(`${$BASE_URL}/registerMyUser`, {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({username})
        });
    }
</script>

<input bind:value={username} placeholder="Write a username" type="text" />

<button on:click={submitRegistration}>Register</button>
