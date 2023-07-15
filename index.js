const express = require("express");
const cors = require("cors");
require("pg");

const database = require("./database");
const Router = require("./src/routes/images");

require("dotenv").config();

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

database.sync().then(() => {
  console.log("Banco de dados sincronizado!");
});

app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
