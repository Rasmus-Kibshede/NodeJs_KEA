import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(path.resolve("public/index.html"));
});

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date();

app.get("/dates", (req, res) => {
    const day = weekdays[date.getDay()];
    const month = months[date.getMonth()]; 
    const year = date.getFullYear();

    res.send({
        date: date.toLocaleString(),
        day: day,
        month: month,
        year: year,
        string:  day + " " + date.getDay() + " " + month + " " + year
    });
});

app.listen(8080, () => console.log("The server is running on port", 8080));