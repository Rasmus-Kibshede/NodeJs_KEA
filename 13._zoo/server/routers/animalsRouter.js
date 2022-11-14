import { Router } from "express";
const router = Router();

import db from "../database/connection_sqlite.js";

//const animals = ["🐺", "🦁", "🦄", "🐼"];

router.get("/api/animals", async (req, res) => {
    const data = await db.all(`SELECT * FROM animals`);
    res.send({
        data: data
    });
});

router.post("/api/animals", async (req, res) => {
    const latinName = req.body.latinName || "Unknow";
    const commentName = req.body.commentName;


    console.log(commentName);
    console.log(latinName);

    if (!commentName)
        return res.status(400).send({ message: "Commen name not defined" });

    const result = await db.run(`INSERT INTO animals(common_name, latin_name) VALUES(?, ?)`, [commentName, latinName]);
    res.send({ changes: result.changes });
});

export default router;