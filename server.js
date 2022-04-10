const path = require("path");
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const routes = require('./controllers/');
const router = require("./controllers/index");
// import { engine } from 'express-handlebars';
const sequelize = require("./config/connection");
// to access the models folder and defaults to index.js for Sequelize
const db = require("./models");
const PORT = process.env.PORT || 3001;

app.use(router);
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "index",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, "public")));

sequelize.sync({
  force: false
}).then(() => {
  // connect to sequelize as long as the port below is open
  app.listen(PORT, () => console.log("Now listening on port: ", PORT));
})