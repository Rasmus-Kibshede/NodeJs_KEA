import { Router } from "express";
import battleRoute from "./battleRoute.js";

const router = Router();

let wins = 0;
let losses = 0;



router.get("/api/battleresults/winsandlosses", (req, res) => {

    // can be done with both

    const winsAndLosses = battleRoute.battleResults.reduce((acc, battleResult) => {
        battleResult.iWon ? acc.wins++ : acc.losses++;
        return acc;
    }, { wins: 0, losses: 0 });

    res.send(winsAndLosses);

    /*
        battleRoute.battleResults.forEach(result => {
            result.iWon ? wins++ : losses++;
        });
    
        res.send({
            wins: wins,
            losses: losses
        });
        */

});



router.get("/api/battleresults/pokemonbattled", (req, res) => {

});


export default router;
