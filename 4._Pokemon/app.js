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


app.get("/", (req, res)=>{
    res.sendFile(path.resolve("public/index.html"));
});

app.get("/pokemon", (req, res) => {
    res.send({
        data : pokemon
    });
});











app.listen(8080, (error) => {
    console.log(error);
    console.log("The server is running on port", 8080)
});