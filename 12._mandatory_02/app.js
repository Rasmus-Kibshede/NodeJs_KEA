import express from "express";
const app = express();

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







const PORT = 8080;
app.listen(PORT, () => console.log("The server is running on port", PORT));