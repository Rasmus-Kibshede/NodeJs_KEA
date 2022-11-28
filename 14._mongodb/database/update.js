import db from "./connection.js";


const updatedPerson = await db.salesPeople.updateOne(
    { name: "Mike" },
    { $set: { salary: 200 } }
);

// Can be done with this, to get the matchedCount attribute from the result
const {matchedCount} = await db.salesPeople.updateOne(
    { name: "Mike" },
    { $set: { salary: 200 } }
);

console.log(matchedCount);


