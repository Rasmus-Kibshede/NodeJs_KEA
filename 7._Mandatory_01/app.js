import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/index.html"));
});






const PORT = process.env.port || 8080;




app.listen(PORT, () => console.log("Server is running on port: ", PORT));