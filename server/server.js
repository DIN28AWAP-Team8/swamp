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
const Role = db.role;

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Shrek application." });
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

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const path = __dirname + '/path';
// const app = express();
// app.use(express.static(path));

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// const db = require("./models");
// const Role = db.role;

// db.sequelize.sync();

// app.get('/', function (req,res) {
//   res.sendFile("./public/index.html");
// });

// require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });

//   Role.create({
//     id: 2,
//     name: "moderator"
//   });

//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }
