<script>

    import { BASE_URL, global_user } from "../../store/globals.js";

    import { useNavigate, useLocation } from "svelte-navigator";

	const navigate = useNavigate();
	const location = useLocation();

    async function login() {
        const user = {
            // @ts-ignore
            email: document.getElementById("login_email").value,
            // @ts-ignore
            password: document.getElementById("login_password").value,
        };

        let response = await fetch(`${$BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user),
        });

        // checks if the server response with a ok and then sets a global user
        if (response.ok) {
            const access = 1;
            const email = user.email;
            $global_user = { email, access };
            
            const from = ($location.state && $location.state.from) || "/";
            navigate(from, { replace: true });
        }
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
