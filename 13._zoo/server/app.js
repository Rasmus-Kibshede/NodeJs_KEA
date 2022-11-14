import express from "express";
const app = express();

/* import path from "path";
app.use(express.static(path.resolve("../client/dist"))); */





app.get("/api/test", (req, res) => {
    res.send({
        message: "TEST"
    });
});


const PORT = 8080;

app.listen(PORT, () => console.log("Server runs on port", PORT));