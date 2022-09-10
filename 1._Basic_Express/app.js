//Entry point er package.json


//Importere express biblioteket
const express = require("express");
// instantiate the libary
const app = express();

//kan gøres sådan her ved kun 1 linje
//const app = require("express")(); 


//route     //callback function
app.get("/", (request, response) => {
    response.send({message: "Created my first route. Check."});
});


        //endpoint
app.get("/deers", (req, res) =>{
    res.send({size: "Big"});
});


// path variables
app.get("/deers/:id", (req, res) => {
    if (req.params.id === '1') {
        res.send({
            name : "Bambie",
            status : "OG"
        });
    } else {
        res.send({
            name : "Another one",
            status : "Newbie"
        });
    }
});

// query string
app.get("/actors", (req, res) => {
    console.log(req.query.name);
    res.send({
        message: "Information about the actor",
        ...req.query
    });
});


app.get("/cups", (req, res) => {
    res.send({
        size: "s",
        color: "red",
        text: "Im a cup"
    })
});

// Ways to send data with GET

// 1.
// path variables
// /cups/:id

// 2.
// query parameters (query string)
// /cups?key=value&key2=value2 



app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});