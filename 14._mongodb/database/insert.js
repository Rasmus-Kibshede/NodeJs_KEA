import db from "./connection.js";

const updatedSuccessShoe = db.shoes.insertOne({ brand: "nike", type: "sandals", price: 200 });

const { inseredId } = db.salesPeople.insertOne({ name: "Mike", salary: 2000 });
inseredId;
