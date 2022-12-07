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

const PORT = process.env.PORT || 8080;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the project application." });
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

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
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.list);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/annually_global", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v1.annually_global);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/annually_northern", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v1.annually_northern_hemisphere);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/annually_southern", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v1.annually_southern_hemisphere);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/monthly_global", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v1.monthly_global);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/monthly_northern", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v1.monthly_northern_hemisphere);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v1/monthly_southern", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v1.monthly_southern_hemisphere);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v2/temperature_reconstruction", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v2.northern_hemisphere_temperature_reconstruction);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v3/annually_mean", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v3.annually_mean);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v3/monthly_mean", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v3.monthly_mean);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v4/de08", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v4.de08);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v4/de08_2", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v4.de08_02);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v4/dss", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v4.dss);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v5/vostok_ice_core_co2", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v5.vostok_ice_core_co2);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v6/ice_core_co2", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v6.ice_core_co2);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v7/co2_measurements", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v7.co2_measurements);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v7/temperature_records", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v7.temperature_records);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v8/emissions_transfers", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v8.emissions_transfers);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v8/territorial_emissions", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v8.territorial_emissions);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v8/consumption_emissions", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v8.consumption_emissions);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v9/sector_co2_emissions", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v9.sector_emissions);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v9/sub_sector_co2_emissions", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.v9.sub_sector_emissions);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v10/human_history_2m", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.V10.human_history_2m);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data/v10/human_history_1k", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.data_sets.V10.human_history_1k);
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * APIs to manage user specific posts (aka custom views of visualizations/charts)
 */

app.post("/posts/create", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.create_post, {
      replacements: {
        description: "",
        user_id: req.query.user_id,
        public: req.query.public,
        two_columns: req.query.two_columns
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/posts/add_chart", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.add_chart, {
      replacements: {
        description: req.query.description,
        post_id: req.query.post_id,
        chart_name: req.query.chart_name
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/posts/get_posts", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.get_posts, {
      replacements: {
        user_id: req.query.user_id
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/posts/get_post", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.get_posts, {
      replacements: {
        post_id: req.query.post_id
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/posts/get_charts", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.get_charts, {
      replacements: {
        post_id: req.query.post_id
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/posts/set_visibility", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.set_visibility, {
      replacements: {
        public: req.query.public
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/posts/set_columns", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.set_columns, {
      replacements: {
        two_columns: req.query.two_columns
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/posts/remove_chart", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.remove_chart, {
      replacements: {
        chart_name: req.query.chart_name
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/posts/delete_post", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.delete_post, {
      replacements: {
        post_id: req.query.post_id
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/posts/delete_all_posts", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.posts.delete_all_posts, {
      replacements: {
        user_id: req.query.user_id
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/users/delete_user", async function (req, res) {
  try {
    const [result,] = await db.sequelize.query(prepared_queries.user.delete_user, {
      replacements: {
        user_id: req.query.user_id
      }
    });
    if (!result) result = [];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});