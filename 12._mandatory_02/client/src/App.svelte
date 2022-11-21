<script>
  import Login from "./components/Login/Login.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import PrivateRoute from "./pages/PrivateRoute.svelte";
    import Profile from "./pages/Profile/Profile.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
  </nav>

  <div>
    <Route path="/" component={Home} />
    <PrivateRoute path="/profile" let:location>
		</PrivateRoute>
    <Route path="login" component={Login} />
  </div>
</Router>

<!-- <Login /> -->
