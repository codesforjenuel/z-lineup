require('dotenv').config();
const path = require("path");
const routes = require('./controllers')
const express = require("express");
const sequelize = require('./config/connection')
const expbs = require("express-handlebars");
const PORT = process.env.PORT || 8080
const app = express();

app.engine("handlebars", expbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`server is now listening at http://localhost:${PORT}`));
});