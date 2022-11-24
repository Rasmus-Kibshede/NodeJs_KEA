import { Router } from "express";
const router = Router();

router.get("/api/pokemon", async (req, res) => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const result = await response.json();
    res.send({ characters: result });
});

router.get("/api/pokemon", async (req, res) => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const result = await response.json();
    res.send({ characters: result });
});






export default router;