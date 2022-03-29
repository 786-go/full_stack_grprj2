const path = require("path");
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const router = require("./controllers/index");
// import { engine } from 'express-handlebars';

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
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("Now listening on port: ", PORT));
