const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(express.json());
app.use(routes);

app.listen(3030);
