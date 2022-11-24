import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

// ------------------ Session ------------------ 
import session from "express-session";
app.use(session({
  secret: process.env.SESSION_SECRET || "Cat",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } //false we are not using https, but http
}));


// ------------------ Routers ------------------ 
import loginRouter from "./routers/LoginRouter.js";
app.use(loginRouter);

import pokemonRouter from "./routers/PokemonRouter.js";
app.use(pokemonRouter);

// ------------------ Rate limiter ------------------ 
import rateLimit from 'express-rate-limit';
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 80 // number of times before client has to wait 10 min
});
app.use(limiter);


const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("The server is running on port", PORT));