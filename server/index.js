const express = require("express");
const cors = rquires("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({message: "Node server is responding"})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});