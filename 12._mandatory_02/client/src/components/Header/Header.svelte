<script>
  import { Router, Link, useMatch } from "svelte-navigator";

  // TODO make Page Highlight
</script>

<header>

  <img src="../../../public/pokeball.svg" alt="" width="100px">

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

  img{
    float: left;
  }

  nav{
    margin: 30px;
    padding: 20px;
  }

  .menuLink {
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    color: white;
    font-size: 25px;
  }

  .menuLink:hover {
    border-radius: 5px;
    color: red;
    cursor: url("../../../public/pokeball.svg"), auto;
  }
</style>
