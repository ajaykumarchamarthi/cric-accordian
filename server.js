const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 4000;

const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => console.log("DB Connection Successfully"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
