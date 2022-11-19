import db from "./connection.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS users;
    `);
}


db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_email VARCHAR(255),
    user_password VARCHAR(255),
    user_firstname VARCHAR(255),
    user_lastname VARCHAR(255),
    user_age INTEGER
);
`);

if(isInDeleteMode){
    db.run(`INSERT INTO users 
    (user_email, user_password, user_firstname, user_lastname, user_age) 
    VALUES 
    ("admin@admin.com", "123", "Rasmus", "Kibshede", 29)`);
}





