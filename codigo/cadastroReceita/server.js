const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});


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

app.get('/receita', (req, res) => {
    connection.query('SELECT * FROM receita', (err,rows,fields) => {
        if (err) {
            console.log("Erro ao executar consulta!");
            return;
        }
        res.json(rows);
    });
});

app.post("/receita", (req, res) => {
    console.log(req.body);
    const { tituloReceita, descricao, modoPreparo, ingredientes, img, email } = req.body;
    connection.query(
      "INSERT INTO receita (tituloReceita, descricao, modoPreparo, ingredientes, img, usuario_email) VALUES (?, ?, ?, ?, ?, ?)",
      [tituloReceita, descricao, modoPreparo, ingredientes, img, email],
      (err, result) => {
        if (err) {
          console.log("Erro ao executar consulta!");
          console.log(err);
          return;
        }
        
        res.json({ message: 'Cadastro realizado!' });
      }
    );
  });


app.listen(port, '0.0.0.0', () => {
    console.log("Conexão estabelecida!" + port);
})