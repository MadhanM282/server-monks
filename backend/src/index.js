const express = require('express');

const connect = require('./configs/db');

const userController = require("./controllers/user.controller");

const { register, login } = require("./controllers/auth.controller");

const passport = require("./configs/google.auth");

const cors = require('cors');

const port = process.env.PORT || 9000;

const clubController = require("./controllers/club.controller");


const app = express();

app.use(cors());

app.use(express.json());

app.use("/clubs",clubController);

app.use("/users", userController);

app.post("/register", register);

app.post("/login", login);

// google auth routes

app.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));


app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: 'https://grubhub-clone-project.vercel.app/home',
        failureRedirect: '/auth/google/failure'
    }));


app.get("/auth/google/success", (req, res) => {

    return res.send({ message: "logged in" })

});


passport.serializeUser(function (user, done) {
    return done(null, user)
});


passport.deserializeUser(function (user, done) {
    return done(null, user)
});


app.get("", async (req, res) => {
    try {
        return res.send("Server is live now")
    } catch (error) {
        return res.send(error.message)
    }
});


app.listen(port, async () => {
    try {
        await connect();
        console.log(`running on port ${port}`);

    } catch (err) {
        console.log('err', err.massage);

    }
});