const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Ensure .env is loaded before using any environment variables
const connectDB = require("./DB/dbConfig"); // Require the database config
const SignIN = require('./model/userModel')
const bcrypt = require("bcrypt");

const app = express();

// Middleware to parse JSON and allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to the database
connectDB();

app.post("/signin", async (req, res) => {
    const { sign } = req.body;
    bcrypt.hash(sign.password, 10)
        .then(hash => {
            const user = new SignIN({
                name: sign.name,
                email: sign.email,
                password: hash
            });
            user.save();
            console.log(user)

        })
        .catch(e => {
            console.log(e)
        })



});

app.post("/login", (req, res) => {
    const { login } = req.body;
    SignIN.findOne({ email: login.email })
        .then(user => {
            if (user) {
                bcrypt.compare(login.password, user.password, (err, response) => {
                    if (response) {
                        res.json("success");
                    } else {
                        res.json("Password doesn't match");
                    }
                })
            } else {
                res.json("user doesn't exist")
            }
        });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});
