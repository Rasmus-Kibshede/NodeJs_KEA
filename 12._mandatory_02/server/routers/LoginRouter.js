import { Router } from "express";
const router = Router();


function loginCheck(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;





    //TODO Database check here
    /* 
    req.session.username = email;
    req.session.password = password;
    */

    next();
}



router.post("/login", loginCheck, (req, res, next) => {
    console.log(req.body);
    
    res.send({ message : `Welcome` });
});


export default router;