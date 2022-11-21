import { Router } from "express";
import db from "../database/connection.js";

const router = Router();


async function loginCheck(req, res, next) {

    /* const user = await db.run("SELECT * FROM users WHERE user_email=? AND user_password=?", [req.body.email, req.body.password]);
    console.log(user);
    res.status(200).send({ data: user }); */

    //TODO Database check here
    /* 
    req.session.username = email;
    req.session.password = password;
    */

    //next();
}


//TODO lav check på om user findes og set session med middleware
router.post("/login", async (req, res, next) => {

    const user = await db.get("SELECT * FROM users WHERE user_email=? AND user_password=?", [req.body.email, req.body.password]);
    // console.log(user);

    if (req.session.isLoggedIn) {
        res.status(200).send({ message: `You are already logged in as ${req.body.email}` });
    } else {
        if (user) {
            next();
        } else {
            res.status(400).send({ message: "Wrong email or password" });
        }
    }
}, (req, res) => {
    req.session.isLoggedIn = true;
    req.session.email = req.body.email;
    console.log("session is set");
    res.status(200).send({ message: `Welcome ${req.body.email}` });
});


export default router;