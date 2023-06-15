const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

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

  // Verifica se o e-mail já está cadastrado
  connection.query(
    "SELECT COUNT(*) AS count FROM usuario WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log("Erro ao verificar o e-mail: ", err);
        return res.status(500).json({ message: "Erro ao verificar o e-mail!" });
      }

      console.log(result);

      if (result[0].count > 0) {
        return res.status(409).json({ message: "Erro! Usuário já está cadastrado!" });
      }

      // Insere o usuário no banco de dados
      connection.query(
        "INSERT INTO usuario (email, nome, idade, senha) VALUES (?, ?, ?, ?)",
        [email, nome, idade, senha],
        (err, result) => {
          if (err) {
            console.log("Erro ao executar consulta!");
            console.log(err);
            if (err.code === 'ER_DUP_ENTRY') {
              // Responde com um código de erro 409 e uma mensagem de erro
              return res.status(409).json({ message: "Erro! Usuário já está cadastrado!" });
            }
            return res.status(500).json({ message: "Erro ao cadastrar usuário!" });
        }
        res.json({ message: "Cadastro realizado!" });
      }
      );
    }
  );
});



app.listen(port, "0.0.0.0", () => {
  console.log("Conexão estabelecida!" + port);
});



