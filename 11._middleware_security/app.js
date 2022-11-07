import express from "express";
const app = express();


/* Middleware funktions */
function ipLogger(req, res, next) {
    console.log(req.ip);
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