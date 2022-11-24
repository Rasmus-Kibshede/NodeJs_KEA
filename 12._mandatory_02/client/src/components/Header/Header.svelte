<script>
  import Login from "../Login/Login.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "../../pages/Home/Home.svelte";
  import PrivateRoute from "../../pages/PrivateRoute.svelte";
  import Profile from "../../pages/Profile/Profile.svelte";
    import Pokemon from "../../pages/Pokemon/Pokemon.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/pokemon">Pokemon</Link>
  </nav>

  <div>
    <Route path="/" component={Home} />
    <Route path="/pokemon" component={Pokemon} />
    <PrivateRoute path="/profile" let:location />
    <Route path="login" component={Login} />
  </div>
</Router>
