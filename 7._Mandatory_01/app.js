import express from "express";
import { renderPage } from "./util/templateEngine.js";

const app = express();

app.use(express.static("public"));

const frontPage = renderPage("frontpage/index.html", {
    tabTitle: "Home" ,
    cssLink: '<link rel="stylesheet" href="../pages/frontpage/index.css">'
});


app.get("/", (req, res) => {
    res.send(frontPage);
});

const PORT = process.env.port || 8080;




app.listen(PORT, () => console.log("Server is running on port: ", PORT));