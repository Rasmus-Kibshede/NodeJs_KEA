
//import and instantiate express
import express from "express";
//const express = require("express");
const app = express();

app.use(express.json());

let weaponCountId = 3;

//Makes a list of weapons
const listOfWeapons = [
    {
        id : 1,
        name : "ak-47",
        type : "Rifle",
        ammo : 32
    },{
        id : 2,
        name : "Glock9",
        type : "Pistol",
        ammo : 8
    },{
        id : 3,
        name : "M4",
        type : "Rifle",
        ammo : 32
    }
];

// Finds a weapon from the weaponList
function findWeaponInList(id) {
    return listOfWeapons.find(weapon => weapon.id === Number(id));
};

// Frontpage
app.get("/", (req, res) =>{
    res.send('Welcome to the weapon frontpage');
});

// GET | Gets all weapons
app.get("/weapons", (req, res) =>{
    res.send({
        weapons: listOfWeapons
    });
});

// GET | Gets a weapon by weapon id
app.get("/weapons/:id", (req, res) => {
    const weapon = findWeaponInList(req.params.id);
    if (weapon === undefined) {
        res.send("can't find weapon with id: " + req.params.id);        
    }else{
        res.send({
            weapons: weapon
        });
    }
});

// POST | Creates a weapon
app.post("/weapons", (req, res) => {
    // validte the req body here

    const weapon = req.body;
    // weapon.id = listOfWeapons[listOfWeapons.length].id++;

    // plus plus for variablen for at opdatere på linjen med det samme
    weapon.id = ++weaponCountId;

    listOfWeapons.push(weapon);
    res.send({
        weapons: listOfWeapons
    });
});


// PUT | Updates a weapons attributes by weapon id
app.put("/weapons/:id", (req, res) => {
    const weapon = findWeaponInList(req.params.id);

    if(weapon !== undefined){
        listOfWeapons[listOfWeapons.indexOf(weapon)] = req.body;
    };

    res.send({
        weapons: listOfWeapons
    });
});

// Patch | Updates a weapons attribute by weapon id
app.patch("/weapons/:id", (req, res) => {
    const weapon = findWeaponInList(req.params.id);

    // MAKE CODE HERE
    // Same code as PUT?

    // Return a 200 status code if the weapon got updated
    res.send({
        weapons: listOfWeapons
    });
});


// DELETE | Removes a weapon by id
app.delete("/weapons/:id", (req, res) => {
    const weapon = findWeaponInList(req.params.id);
    const weaponIndex = listOfWeapons.indexOf(weapon);

    if (weaponIndex !== -1) {

        const deletedWeapon = listOfWeapons.splice(weaponIndex, 1);

        res.send({
            weapon: deletedWeapon
        });        
    }
    else{
        res.status(404).send({
            weapon: undefined,
            message: `No weapon found by id: ${req.params.id}`
        });
    }

});


app.listen(8080, () => console.log("server is running on port", 8080));