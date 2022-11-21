import sqlite3 from "sqlite3";
import { open } from "sqlite";

//console.log(process.argv);

const connection = await open({
    filename: "zoo.db",
    driver: sqlite3.Database
});


// how to make the db: node database/connection_sqlite.js

export default connection;
