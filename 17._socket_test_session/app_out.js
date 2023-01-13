import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import session from "express-session";

/* 
Link:
https://socket.io/how-to/use-with-express-session#1st-use-case-socketio-only-retrieves-the-session-context

*/

const app = express();
const httpServer = createServer(app);
app.use(express.static("public"))

const sessionMiddleware = session({
    secret: "changeit",
    resave: false,
    saveUninitialized: false
});
app.use(sessionMiddleware);

app.get("/login", (req, res) => {
    req.session.authenticated = true;
    console.log("Loggedin", req.session);
    res.redirect("/");
});

const io = new Server(httpServer);

// convert a connect middleware to a Socket.IO middleware
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

io.use(wrap(sessionMiddleware));

// only allow authenticated users
io.use((socket, next) => {
  const session = socket.request.session;
  if (session && session.authenticated) {
    next();
  } else {
    console.log("ERROR");
  }
});

io.on("connection", (socket) => {
    console.log("CONNECTED");
    console.log(socket.request.session);
});

httpServer.listen(8080, () => console.log("Server is running"))