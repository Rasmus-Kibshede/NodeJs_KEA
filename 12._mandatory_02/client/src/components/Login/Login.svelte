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

            // @ts-ignore
            toastr.success("Loggedin", "You are now loggedin");
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


<Link to="/signup">Sugnup</Link>


<!-- Forgot <a href="/"> password? </a> -->
<style>
    .button {
        display: inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid black;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        color: #000;
        text-align: center;
        transition: all 0.4s;
    }
    .button:hover {
        color: black;
        background-image: linear-gradient(to bottom right, red, white);
    }
</style>
