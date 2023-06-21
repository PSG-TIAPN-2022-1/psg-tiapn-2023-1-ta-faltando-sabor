const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

// Automatização de envio de email
var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bd6bc0f3da3ae7",
    pass: "d76ce7ffafdb09"
  }
});

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "20042000",
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
        return res
          .status(409)
          .json({ message: "Erro! Usuário já está cadastrado!" });
      }

      // Insere o usuário no banco de dados
      connection.query(
        "INSERT INTO usuario (email, nome, idade, senha) VALUES (?, ?, ?, ?)",
        [email, nome, idade, senha],
        (err, result) => {
          if (err) {
            console.log("Erro ao executar consulta!");
            console.log(err);
            if (err.code === "ER_DUP_ENTRY") {
              // Responde com um código de erro 409 e uma mensagem de erro
              return res
                .status(409)
                .json({ message: "Erro! Usuário já está cadastrado!" });
            }
            return res
              .status(500)
              .json({ message: "Erro ao cadastrar usuário!" });
          }

          const mailOptions = {
            from: "diego56bola@hotmail.com",
            to: email,
            subject: "Cadastro",
            text: "Olá, seu cadastro foi realizado com sucesso!",
          };
    
          // Envio do e-mail
          transport.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              res.status(500).send("Erro ao enviar o e-mail.");
            } else {
              console.log("E-mail enviado: " + info.response);
              return res.status(200).json({ message: "Cadastro realizado com sucesso!" });
            }
          });

        }
      );
    }
  );
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  connection.query('SELECT senha FROM usuario WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.log('Erro ao verificar o e-mail: ', err);
      return res.status(500).json({ message: 'Erro ao verificar o e-mail!' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Erro! Usuário não encontrado!' });
    }

    // Compara a senha informada com a senha armazenada no banco de dados.
    if (results[0].senha !== senha) {
      return res.status(401).json({ message: 'Erro! Senha inválida!' });
    }

    const mailOptions = {
      from: "diego56bola@hotmail.com",
      to: email,
      subject: "Login",
      text: "Alerta de Login!",
    };

    // Envio do e-mail
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Erro ao enviar o e-mail.");
      } else {
        console.log("E-mail enviado: " + info.response);
        return res.status(200).json({ message: "Login realizado com sucesso!" });
      }
    });

    
  });
});

app.get('/receitas', (req, res) => {
  const ingredientes = req.query.ingredientes; 

  const query = `SELECT * FROM receita WHERE ingredientes LIKE '%${ingredientes}%'`;

  
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar as receitas no banco de dados' });
    } else {
      res.json(results);
    }
  });
});



app.listen(port, "0.0.0.0", () => {
  console.log("Conexão estabelecida!" + port);
});