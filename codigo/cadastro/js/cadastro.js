$(document).ready(function () {
  $("input").on("input", function () {
    $(this).addClass("interacted");
    if (this.checkValidity()) {
      $(this).css("border", "2px solid green");
    } else {
      $(this).css("border", "2px solid red");
    }
  });

  $("#cadastro").on("click", function (e) {
    cadastrar();
  });
});

// Codigo pra validar email
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Verificar a força da senha
function verificarForcaSenha(senha) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(senha);
}

function validarNome(nome) {
  return nome !== "";
}

function validarIdade(idade) {
  return !isNaN(idade) && idade >= 13 && idade <= 100;
}

function exibirMensagemErro(mensagem) {
  const mensagemElement = document.getElementById("mensagem");
  mensagemElement.textContent = mensagem;
  mensagemElement.classList.add("mensagem-erro");
  mensagemElement.classList.remove("mensagem-sucesso");
}

function exibirMensagemSucesso(mensagem) {
  const mensagemElement = document.getElementById("mensagem");
  mensagemElement.textContent = mensagem;
  mensagemElement.classList.add("mensagem-sucesso");
  mensagemElement.classList.remove("mensagem-erro");
}

function cadastrar() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (!nome || !idade || !email || !senha) {
    return window.alert("Preencha todos os campos!");
  }

  if (!validarNome(nome)) {
    return window.alert("Por favor, insira seu nome!");
  }

  if (!validarIdade(idade)) {
    return window.alert("Por favor, insira uma idade válida (entre 13 e 100)!");
  }

  if (!validarEmail(email)) {
    return window.alert("O endereço de e-mail deve estar no formato nome@domínio.com");
  }

  if (!verificarForcaSenha(senha)) {
    return window.alert("Sua senha não é forte o suficiente! Coloque uma senha mais forte!");
  }

  const values = {
    email: email,
    nome: nome,
    idade: idade,
    senha: senha,
  };

  axios
    .post("http://localhost:3000/usuario", values)
    .then((response) => {
      const mensagem = response.data.message;
      if (response.data.success) {
        // Cadastro realizado com sucesso
        exibirMensagemSucesso(mensagem);
        // Limpar os campos de entrada após o cadastro bem-sucedido
        limparCampos();
      } else {
        // Erro ao cadastrar usuário
        exibirMensagemErro(mensagem);
      }
    })
    .catch((error) => {
      // Erro de requisição
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        exibirMensagemErro(error.response.data.message);
      } else {
        exibirMensagemErro("Ocorreu um erro inesperado!");
      }
    });
}

function togglePasswordVisibility() {
  const senhaInput = document.getElementById("senha");
  const type =
    senhaInput.getAttribute("type") === "password" ? "text" : "password";
  senhaInput.setAttribute("type", type);
}

// Função para limpar os campos de entrada
function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
}

