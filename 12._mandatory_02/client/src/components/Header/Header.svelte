<script>
  import { Router, Link, useMatch } from "svelte-navigator";

  // TODO make Page Highlight
</script>

<header>

  <Router>
    <nav>
      <Link class="menuLink" to="/"><span class="menuLink">Home</span></Link>

      <Link class="menuLink" to="/profile"
        ><span class="menuLink">Profile</span></Link
      >

      <Link class="menuLink" to="/pokemon"
        ><span class="menuLink">Pokemon</span></Link
      >
    </nav>
  </Router>
</header>

<style>

  nav{
    margin: 50px 0;
    background-color: rgba(102, 102, 102, 0.9);
    border: solid 1px white;
    border-radius: 10px;
  }

  .menuLink {
    display: inline-block;
    width: 31.60%;
    padding: 20px 10px;
    border-radius: 5px;
    color: white;
    font-size: 25px;
  }

  .menuLink:hover {
    border-radius: 5px;
    color: red;
    cursor: url("../../../public/pokeball.svg"), auto;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }
</style>
