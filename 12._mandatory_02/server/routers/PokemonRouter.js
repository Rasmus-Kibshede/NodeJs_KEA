import { Router } from "express";
const router = Router();

router.get("/api/pokemon", async (req, res) => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const result = await response.json();
    console.log("Im in the api");
    res.send({ pokemon: result });
});



export default router;