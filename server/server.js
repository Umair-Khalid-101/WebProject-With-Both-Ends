const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database Connected")
);

app.use(express.json());
// app.use(morgan("tiny"));
// app.use(helmet());
app.use(cors());

app.use("/app", routesUrls);

app.listen(3001, () => console.log("server is up and running"));
