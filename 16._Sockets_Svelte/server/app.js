import "dotenv/config";
import express from "express";
import http from "http";
import { Server } from "socket.io"

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
});

app.use(express.json());

import cors from "cors";
app.use(cors({ credentials: true, origin: true }));

import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
});
app.use(sessionMiddleware);

import registrationRouter from "./routers/registrationRouter.js";
import exp from "constants";
app.use(registrationRouter);




io.on("connection", (socket) => {

    socket.on("client choose a new color", (data) => {
        io.emit("update the color", data);
    });


});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`The server is running on port`, PORT));