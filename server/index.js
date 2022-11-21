const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const config = require("./config");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/", async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db);
        res.status(200).json({message: "Database connection was made"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});