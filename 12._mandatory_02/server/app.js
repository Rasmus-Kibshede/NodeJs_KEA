import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors);

// Session
import session from "express-session";
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } //false we are not using https, but http
}));

// Rate limiter
import rateLimit from 'express-rate-limit';
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 80 // number of times before client has to wait 10 min
});
app.use(limiter);


app.post("/login", (req, res, next) => {
    console.log(req.body);
    res.send({});
});


const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("The server is running on port", PORT));