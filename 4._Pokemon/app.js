import express from "express";

import { renderPage } from "./util/templateEngine.js";

const app = express();

app.use(express.static("public"));

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

const frontPage = renderPage("/frontpage/index.html", {
    tabTitle: "pokemon frontpage",
    cssLink: '<link rel="stylesheet" href="../pages/frontpage/index.css">'
});

const battlePage = renderPage("/battle/battle.html", {
    tabTitle: "battle page",
    cssLink: '<link rel="stylesheet" href="../pages/battle/battle.css">'
});

const contactPage = renderPage("/contact/contact.html", {
    tabTitle: "contact page",
    cssLink: '<link rel="stylesheet" href="../pages/contact/contact.css">'
});


app.get("/", (req, res) => {
    res.send(frontPage);
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
    const randomPokemon = "pikachu";
    res.redirect(`/battle/${randomPokemon}`);
});

app.get("/battle/:pokemonName", (req, res) => {
    res.send(battlePage.replace("%%TITLE%%", `Battle ${req.params.pokemonName}`));
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    //console.log(error);
    console.log("The server is running on port", server.address().port)
});