import { Router } from "express";
import { sendMail } from "../util/sendMail.js";

const router = Router();


router.post("/signup", (req, res) => {
    sendMail(req.body.email, "Welcome to the pokemon website")
    .then(message => res.send("You are now signed up"))
    .catch(errorMessage => res.send(errorMessage));
});




export default router;