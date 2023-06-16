$(document).ready(function () {
  $("input").on("input", function () {
    $(this).addClass("interacted");
    if (this.checkValidity()) {
      $(this).css("border", "2px solid green");
    } else {
      $(this).css("border", "2px solid red");
    }
  });

  $("#logar").on("click", function (e) {
    login();
  });
});

// Codigo pra validar email
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validarSenha(senha) {
  return senha !== "";
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

function login() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (!email || !senha) {
    return window.alert("Preencha todos os campos!");
  }

  if (!validarEmail(email)) {
    return exibirMensagemErro("Endereço de e-mail inválido!");
  }

  if (!validarSenha(senha)) {
    return exibirMensagemErro("Por favor, insira sua senha!");
  }

  const values = {
    email: email,
    senha: senha,
  };

  axios
    .post("http://localhost:3000/usuario", values)
    .then((response) => {
      const mensagem = response.data.message;
      if (response.data.success) {
        // Login realizado com sucesso
        exibirMensagemSucesso(mensagem);
        // Redirecionar para outra página
        window.location.href = "/home-page/index.html";
      } else {
        // Usuário ou senha inválidos
        exibirMensagemErro(mensagem);
      }
    })
    .catch((error) => {
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
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
}

