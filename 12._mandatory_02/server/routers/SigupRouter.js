import { Router } from "express";
import { sendMail } from "../util/sendMail.js";
import db from "../database/connection.js";
import { passwordEncryption } from "../util/encryption.js";



const router = Router();


router.post("/signup", async (req, res) => {
    
    const email = req.body.email;
    const encrypedPassword = await passwordEncryption(req.body.password);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;


    const resposne = await db.run("INSERT INTO users (user_email, user_password, user_firstname, user_lastname, user_age) VALUES (?, ?, ?, ?, ?);", [email, encrypedPassword, firstname, lastname, age]);

    if(resposne){
        sendMail(email, "Welcome to the pokemon website")
        .then(() => res.send("You are now signed up"))
        .catch(errorMessage => res.send(errorMessage));
    }else{
        res.status(400).send({message: "Database error"});
    }


    
});




export default router;