// Esta função é chamada quando o usuário clica no botão de login
function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value; 

    // Verifica se os campos de email e senha foram preenchidos
    if (email === "" || senha === "") {
        return window.alert("Preencha todos os campos!");
    }

    // Faz uma consulta ao servidor com o email e senha fornecidos pelo usuário
    axios.get(`http://localhost:3000/usuario?email=${email}&senha=${senha}`)
    .then((result) => {
        /*
        console.log('Resultado da consulta:', result);
        console.log('Email:', email);
        console.log('Senha:', senha);
        */

        const usuarioAutenticado = result.data.find(usuario => usuario.email === email && usuario.senha === senha);
        
        // Verifica se o email e senha correspondem aos valores armazenados no banco de dados
        if (usuarioAutenticado && usuarioAutenticado.email === email && usuarioAutenticado.senha === senha) {
            localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
            const mensagem = document.getElementById('mensagem');
            mensagem.textContent = "Usuário autenticado com sucesso!";
            mensagem.classList.remove("mensagem-erro");
            mensagem.classList.add('mensagem-sucesso');
        } else {
            const mensagem = document.getElementById('mensagem');
            mensagem.textContent = "Email ou senha incorretos!";
            mensagem.classList.remove("mensagem-sucesso");
            mensagem.classList.add("mensagem-erro");
        }
    })
    .catch((err) => {
        console.log('Erro:', err);   
    });
}

function togglePasswordVisibility() {
    const senhaInput = document.getElementById("senha");
    const type = senhaInput.getAttribute("type") === "password" ? "text" : "password";
    senhaInput.setAttribute("type", type);
}



  