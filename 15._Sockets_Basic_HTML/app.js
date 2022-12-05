import express from "express";
import http from "http";
import { Server } from "socket.io";



const app = express();
app.use(express.static("public"));
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {

    socket.on("client choose a color", (data) => {
        //socket.broadcast.emit("this is the new color", data);

        //socket.emit("this is the new color", data);

        io.emit("this is the new color", data);
    });



    io.on("disconnect", () => {
        console.log(`Socket ${socket.id} left`);
    });
});


server.listen(8080, () => console.log(`The server is running on port`, 8080));