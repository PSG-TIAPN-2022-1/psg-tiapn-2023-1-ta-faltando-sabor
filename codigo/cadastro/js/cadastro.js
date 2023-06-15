$(document).ready(function() {
  $('input').on('input', function() {
    $(this).addClass('interacted');
    if (this.checkValidity()) {
      $(this).css('border', '2px solid green');
    } else {
      $(this).css('border', '2px solid red');
    }
  });

  $('#cadastro').on('click', function(e) {
    cadastrar();
  });
});


function cadastrar() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  // Codigo pra validar email e tambem pra verificar a força da senha
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    if (!validarEmail(email)) {
        console.log("Endereço de e-mail inválido!");
        return;
    }

    function verificarForcaSenha(senha) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(senha);
    }
    
    if (!verificarForcaSenha(senha)) {
      alert("Sua senha não é forte o suficiente! Coloque uma senha mais forte!");
    }

  if (nome === "" || idade === "" || email === "" || senha === "") {
    return window.alert("Preencha todos os campos!");
  }

  const values = {
    email: email,
    nome: nome,
    idade: idade,
    senha: senha,
  };

  console.log("Enviando requisição");

  axios.post("http://localhost:3000/usuario", values)
  .then((response) => {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.classList.add("mensagem-sucesso");
  })
  .catch((error) => {
    const mensagem = document.getElementById("mensagem");
  
    if (error.response && error.response.status === 409) {
      mensagem.textContent = "Erro! Usuário já cadastrado!";
    } else {
      mensagem.textContent = "Ocorreu um erro inesperado!";
    }
  
    console.log("O erro é: ", error);
    mensagem.classList.add("mensagem-erro");
    mensagem.classList.remove("mensagem-sucesso");
  });    
}

function togglePasswordVisibility() {
  const senhaInput = document.getElementById("senha");
  const type =
    senhaInput.getAttribute("type") === "password" ? "text" : "password";
  senhaInput.setAttribute("type", type);
}
