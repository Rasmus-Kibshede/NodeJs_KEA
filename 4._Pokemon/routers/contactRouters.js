import { Router } from "express";
import { sendMail } from "../util/sendMail.js";

const router = Router();

router.post("/api/contact", (req, res) => {
    sendMail(req.body.mail, req.body.message)
    .then(message => res.send(message))
    .catch(errorMessage => res.send(errorMessage));
});


export default router;