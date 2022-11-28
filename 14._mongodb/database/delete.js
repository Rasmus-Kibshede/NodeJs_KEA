import db from "./connection.js";


const deletePerson = db.salesPeople.deleteOne({name: "Mike"});
deletePerson;

