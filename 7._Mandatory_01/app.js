import express from "express";
import { renderPage } from "./util/templateEngine.js";

const app = express();

import weekRouter from "./routers/weekRoute.js";
app.use(weekRouter);

app.use(express.static("public"));

const adminPage = renderPage("adminpage/adminpage.html", {
    tabTitle: "Admin",
    cssLink: '<link rel="stylesheet" href="../pages/adminpage/adminpage.css">',
    headliner: "Admin page"
});

const frontPage = renderPage("frontpage/index.html", {
    tabTitle: "Home",
    cssLink: '<link rel="stylesheet" href="../pages/frontpage/index.css">',
    headliner: "Home page"
});


app.get("/", (req, res) => {
    res.send(frontPage);
});



// TODO make login work
const admin = {
    username: "admin",
    password: "123"
}

app.get("/admin", (req, res) => {
    //const { email, password } = req.body;
    //console.log(email);

    res.send(adminPage);
});

app.post("/admin", (req, res) => {
    //const { email, password } = req.body;
    //console.log(email);

    res.send(adminPage);
});

const PORT = process.env.port || 8080;

app.listen(PORT, () => console.log("Server is running on port: ", PORT));