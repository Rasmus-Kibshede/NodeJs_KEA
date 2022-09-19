import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(path.resolve("public/index.html"));
});


const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(weekdays[]);

app.get("/dates", (res, req) => {

const date = new Date();

    res.send({
        day : weekdays[date.getDate()]
    });

});



app.listen(8080, () => console.log("The server is running on port", 8080));