import express from "express";
import { renderPage } from "./util/templateEngine.js";

const app = express();

app.use(express.static("public"));

const frontPage = renderPage("frontpage/index.html", {
    tabTitle: "Home",
    cssLink: '<link rel="stylesheet" href="../pages/frontpage/index.css">'
});

const adminPage = renderPage("adminpage/adminpage.html", {
    tabTitle: "Admin page",
    cssLink: '<link rel="stylesheet" href="../pages/adminpage/adminpage.css">'
});


app.get("/", (req, res) => {
    res.send(frontPage);
});

const admin = {
    username: "admin",
    password: "123"
}

app.post("/admin", (req, res) => {
    const { email, password } = req.body;
    console.log(email);

    res.send(adminPage);
});

const PORT = process.env.port || 8080;




app.listen(PORT, () => console.log("Server is running on port: ", PORT));