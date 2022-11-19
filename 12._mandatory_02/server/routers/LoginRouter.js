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
 router.post("/login", async (req, res) => {
    //console.log(req.body);

    const user = await db.all("SELECT * FROM users WHERE user_email=? AND user_password=?", [req.body.email, req.body.password]);

    console.log(user);

    res.status(200).send({ data: user });
});


export default router;