const express = require("express");
const dotenv = require("dotenv");
const fileupload = require("express-fileupload");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());
app.use(fileupload());
app.use(cors());

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  server.close(() => process.exit(1));
});
