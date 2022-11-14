<script>
    async function login() {
        const user = {
            username: document.getElementById("login_username"),
            password: document.getElementById("login_password"),
        };

        // Need a fix for CORS
        let response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user),
        });
    }
</script>

<h1>This is a login</h1>

<label for="login_username">Username : </label>
<input
    type="text"
    placeholder="Enter Username"
    id="login_username"
    name="username"
    required
/>
<label for="login_password">Password : </label>
<input
    type="password"
    placeholder="Enter Password"
    id="login_password"
    name="password"
    required
/>
<button type="submit" on:click={login}>Login</button>

<!-- Forgot <a href="/"> password? </a> -->
<style></style>
