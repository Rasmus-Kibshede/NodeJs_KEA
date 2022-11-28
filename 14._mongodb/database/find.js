import db from "./connection.js";

const allShoes = await db.shoes.find().toArray();

/* console.log(allShoes); */

const richAF = await db.salesPeople.find({salary: {$gt: 50}}).toArray();

console.log(richAF);


