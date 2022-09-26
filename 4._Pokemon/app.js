import express from "express";

const app = express();

app.use(express.static("public"));

import path from "path";


const pokemon = [
    {
        name: "Charmander",
        type: "Fire",
        level: 12
    },
    {
        name: "Pikatu",
        type: "Electric",
        level: 40
    }
];


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/index.html"));
});

app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(resolve => resolve.json())
        .then(result => {
            res.send({
                data: result
            });
        });
});

app.get("/battle", (req, res) => {
    res.sendFile(path.resolve("public/battle/battle.html"));
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    //console.log(error);
    console.log("The server is running on port", server.address().port)
});