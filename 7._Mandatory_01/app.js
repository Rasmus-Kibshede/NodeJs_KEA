import express, { json } from "express";
import { renderPage } from "./util/templateEngine.js";
import bodyParser from "body-parser";
import session from 'express-session';

const app = express();

import weekRouter from "./routers/weekRoute.js";
app.use(weekRouter);

app.use(express.static("public"));

// converts the form inputs so body knows it and can read the property
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


const loginPage = renderPage("adminpage/loginpage.html", {
    tabTitle: "Login",
    cssLink: '<link rel="stylesheet" href="../pages/adminpage/adminpage.css">',
    headliner: "Login"
});

const adminPageLoggedIn = renderPage("adminpage/admin.html", {
    tabTitle: "Admin page",
    cssLink: '<link rel="stylesheet" href="../pages/adminpage/adminpage.css">',
    headliner: "Admin page"
});

const frontPage = renderPage("frontpage/index.html", {
    tabTitle: "Home",
    cssLink: '<link rel="stylesheet" href="../pages/frontpage/index.css">',
    headliner: "Home page"
});


app.get("/", (req, res) => {
    res.send(frontPage);
});


const admin = {
    email: "admin@admin.com",
    password: "123"
}

app.get("/admin", (req, res) => {
    if (req.session.loggedin) {
        console.log("Logged in");
        res.send(adminPageLoggedIn);
    } else {
        console.log("Logged out");
        res.send(loginPage);
    }
});


// Can't redirect to adminpage. Dont know why
app.get("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/admin");
});


app.post('/auth', (req, res) => {
    
    let email = req.body.email;
    let password = req.body.password;
    
    if (email === admin.email && password === admin.password) {
        req.session.loggedin = true;
        req.session.user = { email, password };
        res.redirect('/admin');
    } else {
        //TODO make error message and send to page
        res.send('Incorrect Username and/or Password!');
    }
});


const PORT = process.env.port || 8080;

app.listen(PORT, () => console.log("Server is running on port: ", PORT));