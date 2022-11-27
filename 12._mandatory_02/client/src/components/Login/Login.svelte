<script>
    import { BASE_URL, global_user } from "../../store/globals.js";

    import { useNavigate, useLocation, Link } from "svelte-navigator";

    const navigate = useNavigate();
    const location = useLocation();

    async function login() {
        const user = {
            // @ts-ignore
            email: document.getElementById("login_email").value,
            // @ts-ignore
            password: document.getElementById("login_password").value,
        };

        console.log(user.password);

        if (!user.email || !user.password) {
            // @ts-ignore
            toastr.error("Error", "Fill out the blanks");
        } else {
            let response = await fetch(`${$BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(user),
            });

            const result = await response.json();
            const message = result.message;

            // checks if the server response with a ok and then sets a global user
            if (response.ok) {
                const access = 1;
                const email = user.email;
                $global_user = { email, access };
                const from = ($location.state && $location.state.from) || "/";
                navigate(from, { replace: true });

                // @ts-ignore
                toastr.success("Loggedin", message);
            } else {
                // @ts-ignore
                toastr.error("Error", message);
            }
        }
    }
</script>

<div id="div_login">
    <h1>Login</h1>

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
    <button type="submit" on:click={login} class="button">Login</button>
</div>

<Link to="/signup">Signup</Link>

<!-- Forgot <a href="/"> password? </a> -->
<style>
</style>
