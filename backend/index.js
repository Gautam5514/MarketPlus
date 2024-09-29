const express = require('express');
const cors = require('cors');
require('dotenv').config();  // Ensure .env is loaded before using any environment variables
const connectDB = require('./DB/dbConfig');  // Require the database config
const SignIN = require('./model/user.Model')

const app = express();

// Middleware to parse JSON and allow cross-origin requests
app.use(express.json());  // Parse incoming JSON requests
app.use(cors());

// Connect to the database
connectDB();

app.get('/',async(req,res)=>{
    const users = new SignIN ({
        name:"sagar kumar",
        email:"sagar@gmail.com",
        password:"0000"
    })
    await users.save();

})
app.get("/show", async (req, res) => {
    const show = await SignIN.find();
    res.send(show);
})

// Start the server
const port = process.env.PORT || 5000;
app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});
