import express from "express";
const app = express();

app.use(express.json());

/* import path from "path";
app.use(express.static(path.resolve("../client/dist"))); */

import cors from "cors";
app.use(cors());

import animalsRouter from "./routers/animalsRouter.js";
app.use(animalsRouter);


const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));