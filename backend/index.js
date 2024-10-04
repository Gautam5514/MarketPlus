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
    console.log(req.body);  // Log the body to debug
    const { name, email, password } = req.body;  // Destructure directly

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new SignIN({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();
        console.log("User saved:", user);
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Error during signup" });
    }
});





app.post("/login", (req, res) => {
    console.log(req.body); // Log the body to debug
    const { email, password } = req.body; // Destructure directly from req.body

    SignIN.findOne({ email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        res.json("success");
                    } else {
                        res.json("Password doesn't match");
                    }
                });
            } else {
                res.json("User doesn't exist");
            }
        })
        .catch(error => {
            console.error("Login Error:", error);
            res.status(500).json({ message: "Error during login" });
        });
});



// Start the server
const port = process.env.PORT || 5000;
app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});