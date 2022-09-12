
//import and instantiate express
const app = require("express")();

//Makes a weapon class with a constructor
class Weapon{
    constructor(id, name, type, magSize){
        this.id = id;
        this.name = name;
        this.type = type;
        this.magSize = magSize;
    };
};

//Makes a list of weapons
const listOfWeapons = [new Weapon(1, "ak-47", "Rifle", 32), new Weapon(2, "Glock9", "Pistol", 8)];


app.get("/", (req, res) =>{
    res.send('Welcome to the weapon frontpage');
});

app.get("/weapons", (req, res) =>{
    res.send({
        weapons: listOfWeapons
    });
});

app.get("/weapons/:id", (req, res) => {
    let weapon = listOfWeapons.find(weapon => weapon.id === Number(req.params.id))
    if (weapon === undefined) {
        res.send("can't find weapon with id: " + req.params.id);        
    }else{
        res.send(weapon);
    }
});


app.listen(8080, () => console.log("server is running on port", 8080));