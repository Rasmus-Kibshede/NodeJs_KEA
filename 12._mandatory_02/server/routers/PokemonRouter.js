import { Router } from "express";
const router = Router();

// remake with async await
router.get("/api/pokemon", async (req, res) => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const result = await response.json();
    res.send({ characters: result });

    /* fetch("https://hp-api.herokuapp.com/api/characters")
        .then(resolve => resolve.json())
        .then(result => {
            res.send({
                characters: result
            });
        }); */
});






export default router;