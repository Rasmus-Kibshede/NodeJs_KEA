//const express = require('express');
const app = express();

import express from "express";

app.use(express.static("public"));

import path from "path";

import { incrementVisitorCounter } from "./geocitiesUtil.js";

//const { incrementVisitorCounter } = require("./geocitiesUtil");

app.get("/", (req, res) => {
    console.log("Visitors since the server started", incrementVisitorCounter());
    //res.sendFile(__dirname + "/public/frontpage/frontpage.html");
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
});


app.listen(8080, () => console.log("The server is running on port", 8080));