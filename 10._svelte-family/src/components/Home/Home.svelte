<script>
    import { fridgeMessageStore } from "../../store/frigdeBulletStore.js";
</script>

<h1>Home</h1>

<h4>Fridge Bulletin</h4>
<p>{$fridgeMessageStore}</p>

<p>-----------</p>
<p>| Welcome |</p>
<p>-----------</p>

<slot />
