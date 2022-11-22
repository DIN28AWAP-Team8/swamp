const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const config = require("./config");
const prepared_queries = require("./queries.json");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

//tests connecting to database
app.get("/", async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db);
        res.status(200).json({message: "Database connection was made"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

/**
 * APIs to list and retrieve available data sets
 */

 app.get("/data", async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db);
        const [result,] = await connection.execute(prepared_queries.data_set.list);
        if (!result) result = [];
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get("/data/v1/annually_global", async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db);
        const [result,] = await connection.execute(prepared_queries.data_set.v1.annually_global);
        if (!result) result = [];
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});