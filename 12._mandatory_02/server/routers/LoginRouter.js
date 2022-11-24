import { Router } from "express";
import db from "../database/connection.js";
import { passwordCompare } from "../encryption.js";

const router = Router();

router.post("/login", async (req, res, next) => {
    //Session check

    if (req.session.isLoggedIn) {
        res.status(200).send({ message: `You are already logged in as ${req.body.email}` });
    }
    next();

}, async (req, res, next) => {
    //Database check
    const user = await db.get("SELECT * FROM users WHERE user_email=?", [req.body.email]);

    if (user) {
        const passwordMatch = passwordCompare(req.body.password, user.user_password);
        if (passwordMatch) {
            next();
        }
    } else {
        res.status(400).send({ message: "Wrong email or password" });
    }

}, (req, res) => {
    // Session set
    req.session.isLoggedIn = true;
    req.session.email = req.body.email;
    console.log("session is set");
    res.status(200).send({ message: `Welcome ${req.body.email}` });
});


export default router;