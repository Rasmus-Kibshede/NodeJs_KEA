<script>
  import Login from "./components/Login/Login.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
  </nav>

  <div>
    <Route path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
  </div>
</Router>

<Login></Login>