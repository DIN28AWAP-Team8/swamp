const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const prepared_queries = require("./queries.json");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the project application." });
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}

/**
 * APIs to list and retrieve available data sets
 */

app.get("/data", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_set.list);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/annually_global", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_set.v1.annually_global);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/annually_northern", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_set.v1.annually_northern_hemisphere);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/annually_southern", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_set.v1.annually_southern_hemisphere);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/monthly_global", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_set.v1.monthly_global);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/monthly_northern", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_set.v1.monthly_northern_hemisphere);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/monthly_southern", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_set.v1.monthly_southern_hemisphere);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v2/temperature_reconstruction", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_set.v2.northern_hemisphere_temperature_reconstruction);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});