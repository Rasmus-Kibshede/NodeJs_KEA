<script>
// @ts-nocheck

    async function login() {
        const user = {
            email: document.getElementById("login_email").value,
            password: document.getElementById("login_password").value,
        };

        let response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user)
        });

        response;
    }
</script>

<div id="div_login">
    <h1>This is a login</h1>

    <label for="login_email">Email : </label>
    <input
        type="email"
        placeholder="Enter Email"
        id="login_email"
        name="email"
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
</div>

<!-- Forgot <a href="/"> password? </a> -->
<style></style>
