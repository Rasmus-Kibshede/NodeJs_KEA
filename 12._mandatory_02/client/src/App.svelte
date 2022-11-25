<script>
    import Login from "./components/Login/Login.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import PrivateRoute from "./pages/PrivateRoute.svelte";
  import Profile from "./pages/Profile/Profile.svelte";
  import Pokemon from "./pages/Pokemon/Pokemon.svelte";
  import Logout from "./components/Logout/Logout.svelte";
  import Header from "./components/Header/Header.svelte";
</script>

<Header />

<Router>
  <div id="content">
    <Route path="/" component={Home} />
    <Route path="/pokemon" component={Pokemon} />
    <PrivateRoute path="/profile" let:location>
      <Profile />
      <Logout />
    </PrivateRoute>
    <Route path="login" component={Login} />
  </div>
</Router>

<!-- <Login /> -->
<style>

  #content{
    padding: 20px;
    background: #fff url("https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png");
    color: black;
  }


</style>
