<script>
    import { BASE_URL } from "../../store/globals.js";
    import { useNavigate, useLocation } from "svelte-navigator";

    const navigate = useNavigate();
    const location = useLocation();

    async function signup() {
        const user = {
            // @ts-ignore
            email: document.getElementById("signup_email").value,
            // @ts-ignore
            password: document.getElementById("signup_password").value,
            // @ts-ignore
            firstname: document.getElementById("signup_firstname").value,
            // @ts-ignore
            lastname: document.getElementById("signup_lastname").value,
            // @ts-ignore
            age: document.getElementById("signup_age").value,
        };

        let response = await fetch(`${$BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user),
        });

        const result = await response.json();
        const message = result.message;

        if (response.ok) {
            const from = ($location.state && $location.state.from) || "/";
            navigate(from, { replace: true });

            // @ts-ignore
            toastr.success("Signed up", message);
        } else {
            // @ts-ignore
            toastr.error("Error", message);
        }
    }
</script>

<div>
    <h1>Signup here</h1>

    <label for="signup_email">Email:</label>
    <input type="email" id="signup_email" placeholder="Enter Email" />

    <label for="signup_password">Password:</label>
    <input type="text" id="signup_password" placeholder="Enter Password" />

    <label for="signup_firstname">Firstname:</label>
    <input type="text" id="signup_firstname" placeholder="Enter Firstname" />

    <label for="signup_lastname">Lastname:</label>
    <input type="text" id="signup_lastname" placeholder="Enter Lastname" />

    <label for="signup_age">Age:</label>
    <input type="number" id="signup_age" placeholder="Age" />

    <button on:click={signup}>Signup</button>
</div>

<style>
    div {
        display: grid;
        justify-content: center;
        justify-items: center;
        row-gap: 10px;
    }
</style>
