const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, "dist")));

const port = process.env.PORT;

// eslint-disable-next-line no-console
app.listen(port, console.log(`App running on port ${port}!`));
