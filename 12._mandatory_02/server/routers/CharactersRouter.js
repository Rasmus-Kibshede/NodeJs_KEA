import { Router } from "express";
const router = Router();

// remake with async await
router.get("/api/characters", async (req, res) => {
    fetch("https://hp-api.herokuapp.com/api/characters")
        .then(resolve => resolve.json())
        .then(result => {
            res.send({
                characters: result
            });
        });
});






export default router;