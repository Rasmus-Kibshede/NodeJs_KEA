import express from "express";

import { renderPage, injectData } from "./util/templateEngine.js";

const app = express();
app.use(express.json());

import pokemonRouter from "./routers/pokemonRoute.js";
app.use(pokemonRouter);

import battleRouter from "./routers/battleRoute.js";
app.use(battleRouter.router);

import battleResults from "./routers/battleResultsRouter.js"
app.use(battleResults);

app.use(express.static("public"));

// ------------------ Render ------------------

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

const battleResultsPage = renderPage("/battleResults/battleResults.html", {
    tabTitle: "Battle results",
    cssLink: ''
});

// ------------------ GET ------------------

app.get("/battleResults", (req, res) => {
    res.send(battleResultsPage);
});

app.get("/", (req, res) => {
    res.send(frontPage);
});

const randomPokemon = ["pikachu", "slowpoke"];
app.get("/battle", (req, res) => {
    res.redirect(`/battle/${randomPokemon[Math.floor(Math.random() * randomPokemon.length)]}`);
});

app.get("/battle/:pokemonName", (req, res) => {
    const pokemonName = req.params.pokemonName;
    let battlePageWithData = injectData(battlePage, { pokemonName });
    /* const listOfNumbers = [1, 2, 3, 4];
    battlePageWithData = injectData(battlePageWithData, { listOfNumbers }); */
    res.send(battlePageWithData.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    //console.log(error);
    console.log("The server is running on port", server.address().port)
});