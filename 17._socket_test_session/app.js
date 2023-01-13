import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import session from "express-session";
import sharedsession from "express-socket.io-session";



/* 
Links:
https://www.npmjs.com/package/express-socket.io-session
https://github.com/oskosk/express-socket.io-session/blob/master/example/index.js
*/

const app = express();
const httpServer = createServer(app);
app.use(express.static("public"));

const sessionMiddleware = session({
    secret: "changeit",
    resave: false,
    saveUninitialized: false
});

app.use(sessionMiddleware);

app.get("/login", (req, res) => {
    req.session.authenticated = true;
    // console.log("/login", req.session);
    res.redirect("/");
});

const io = new Server(httpServer);
io.use(
    sharedsession(sessionMiddleware, {
        autoSave: true
    })
);



io.on("connection", (socket) => {
    console.log("CONNECTED", socket.handshake.session);
});

httpServer.listen(8080, () => console.log("Server is running"))