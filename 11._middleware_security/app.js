import express from "express";
const app = express();

import helmet from "helmet";
app.use(helmet());


import rateLimit from 'express-rate-limit';

const frontdoorLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use("/frontdoor", frontdoorLimiter);


const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 80
});

app.use(limiter);



/* Middleware funktions */
function ipLogger(req, res, next) {
    //console.log(req.ip);
    next();
}

function butler(req, res, next) {
    console.log("This way, sir.");
    next();
}

function guardMiddleware(req, res, next) {
    console.log(req.query.name);
    if (req.query.name !== "Anders") {
        res.send({ message: "You are not Anders" });
    }
    req.fullName = "Anders Latif";
    next();
}


app.use(ipLogger);
app.use("/room", butler);


app.get("/frontdoor", guardMiddleware, (req, res, next) => {
    res.send({
        message: `Please enter ${req.fullName}`
    });
});


app.get("/room", butler, (req, res, next) => {
    console.log("Room 1");
    next();
    //res.send("You are in room 1");
});

app.get("/room", butler, (req, res) => {
    console.log("Room 2");
    res.send("You are in room 2");
});


app.get("*", (req, res) => {
    res.send("<h4>ERROR</h4>");
});

const PORT = 8080;
app.listen(PORT, () => console.log("The server is running on port", PORT));