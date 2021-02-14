const mongoose = require("mongoose");

const PORT = 4000;

require("dotenv").config({ path: ".env" });

//db connection
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.error(`Database Connection Error => ${err.message}`);
});
// require our models here so that it can be accessed throughtout the application
require("./models/product.model");

// require app.js
const app = require("./app");

const server = app.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
