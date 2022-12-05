import { Router } from "express";

const router = Router();

router.get("/me", (req, res) => {
    res.send({ data: req.session.username });
});

router.get("/logout", (req, res) => {
    req.session.username = undefined;
    res.send();
});

router.post("/registerMyUser", (req, res) => {
    req.session.username = req.body.username;

    res.send({ data: req.body.username });
});

export default router;