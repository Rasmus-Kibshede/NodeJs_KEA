import { renderPage } from "../util/templateEngine.js";
import { Router } from "express";
const router = Router();


const introduction = renderPage("week1/week1.html", {
    tabTitle: "Introduction",
    cssLink: '<link rel="stylesheet" href="../pages/week1/week1.css">',
    headliner: "Introduction"
});

const firstServer = renderPage("week2/week2.html", {
    tabTitle: "First Server",
    cssLink: '<link rel="stylesheet" href="../pages/week2/week2.css">',
    headliner: "First Server"
});

const servingHTML = renderPage("week3/week3.html", {
    tabTitle: "Serving",
    cssLink: '<link rel="stylesheet" href="../pages/week3/week3.css">',
    headliner: "Serving HTML"
});

const fullCrud = renderPage("week4/week4.html", {
    tabTitle: "CRUD",
    cssLink: '<link rel="stylesheet" href="../pages/week4/week4.css">',
    headliner: "Full CRUDable REST API"
});

const fetchingAndRedirecting = renderPage("week5/week5.html", {
    tabTitle: "Fetch",
    cssLink: '<link rel="stylesheet" href="../pages/week5/week5.css">',
    headliner: "Fetching and redirecting"
});

const ssr = renderPage("week6/week6.html", {
    tabTitle: "SSR",
    cssLink: '<link rel="stylesheet" href="../pages/week6/week6.css">',
    headliner: "SSR (Server Side Rendering)"
});

const templateAndSvelte = renderPage("week7/week7.html", {
    tabTitle: "template",
    cssLink: '<link rel="stylesheet" href="../pages/week7/week7.css">',
    headliner: "More template engine + Starting Svelte"
});


router.get("/week1", (req, res) => {
    res.send(introduction);
});

router.get("/week2", (req, res) => {
    res.send(firstServer);
});

router.get("/week3", (req, res) => {
    res.send(servingHTML);
});

router.get("/week4", (req, res) => {
    res.send(fullCrud);
});

router.get("/week5", (req, res) => {
    res.send(fetchingAndRedirecting);
});

router.get("/week6", (req, res) => {
    res.send(ssr);
});

router.get("/week7", (req, res) => {
    res.send(templateAndSvelte);
});


export default router;