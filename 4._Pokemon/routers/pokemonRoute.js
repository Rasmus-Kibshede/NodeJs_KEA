import { Router } from "express";
const router = Router();


router.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(resolve => resolve.json())
        .then(result => {
            res.send({
                data: result
            });
        });
});


export default router;


