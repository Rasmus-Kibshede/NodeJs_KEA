import "dotenv/config";
import { MongoClient } from "mongodb";

const url = process.env.DB_URL;
const client = new MongoClient(url);

await client.connect();

const db = client.db("zoo");

const animals = db.collection("animals");

await animals.insertOne({ type: "Tiger" });

const foundAnimals = await animals.find().toArray();

console.log(foundAnimals);

