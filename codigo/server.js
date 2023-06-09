const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fofi3436",
  database: "mydb",
});

connection.connect((err) => {
  if (err) {
    console.log("Falha de conexão!" + err.stack);
    return;
  }

  console.log("Conexão estabelecida!" + connection.threadId);
});

app.options("*", cors());

app.get("/usuario", (req, res) => {
  connection.query("SELECT * FROM usuario", (err, rows, fields) => {
    if (err) {
      console.log("Erro ao executar consulta!");
      return;
    }
    res.json(rows);
  });
});


app.post("/usuario", (req, res) => {
  console.log(req.body);
  const { email, nome, idade, senha } = req.body;
  connection.query(
    "INSERT INTO usuario (email, nome, idade, senha) VALUES (?, ?, ?, ?)",
    [email, nome, idade, senha],
    (err, result) => {
      if (err) {
        console.log("Erro ao executar consulta!");
        console.log(err);
        return res.status(500).json({ message: "Erro ao cadastrar usuário!" });
      }

      res.json({ message: "Cadastro realizado!" });
    }
  );
});

app.listen(port, "0.0.0.0", () => {
  console.log("Conexão estabelecida!" + port);
});


