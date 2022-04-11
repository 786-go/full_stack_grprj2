const path = require("path");
const express = require("express");
// must install express-session: npm i express-session connect-session-sequelize
// const session = require("express-session");
const app = express();
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const routes = require('./controllers');
// const router = require("./controllers/index");
// import { engine } from 'express-handlebars';
const sequelize = require("./config/connection");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// to access the models folder and defaults to index.js for Sequelize
const db = require("./models");
const PORT = process.env.PORT || 3001;

const sess = {
  // secret: add Secret here
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

// app.use(session(sess));


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
app.use(routes);
sequelize.sync({
  // deletes and creates tables if true
  force: false
}).then(() => {
  // connect to sequelize as long as the port below is open
  app.listen(PORT, () => console.log("Now listening on port: ", PORT));
})