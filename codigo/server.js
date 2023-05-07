const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fofi3436',
    database: 'mydb'
});

connection.connect((err) => {
    if (err) {
        console.log("Falha de conexão!" + err.stack);
        return;
    }

    console.log("Conexão estabelecida!" + connection.threadId);
});

app.get('/usuario', (req, res) => {
    connection.query('SELECT * FROM usuario', (err,rows,fields) => {
        if (err) {
            console.log("Erro ao executar consulta!");
            return;
        }
        res.json(rows);
    });
});

app.post('/usuario', (req, res) => {
    const data = res.body;
    connection.query('INSERT INTO usuario (usuario.email, usuario.nome, usuario.idade, usuario.password) VALUES (?,?,?,?)', [data], (err,rows,fields) => {
        if (err) {
            console.log("Erro ao executar consulta!");
            return;
        }
        res.json({message: 'Cadastro realizado!'});
    });
});

app.listen(port,() => {
    console.log("Conexão estabelecida!" + port);
})