function cadastrar() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  /* Codigo pra validar email e tambem pra verificar a força da senha (Será implementado depois)
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
        console.log("Senha não é forte o suficiente!");
        return;
    }
    */

  if (nome === "" || idade === "" || email === "" || senha === "") {
    return window.alert("Preencha todos os campos!");
  }

  const values = {
    email: email,
    nome: nome,
    idade: idade,
    senha: senha,
  };

  axios.post("http://localhost:3000/usuario", values)
    .then((response) => {
      const mensagem = document.getElementById("mensagem");
      if (response.status >= 400) {
        window.alert("Erro! Usuário já cadastrado!");
        mensagem.textContent = "Erro! Usuário já cadastrado!";
        mensagem.classList.remove("mensagem-sucesso");
        mensagem.classList.add("mensagem-erro");
      } else {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.classList.add("mensagem-sucesso");
      }
    })
    .catch((error) => {
      window.alert("Erro! Usuário já cadastrado!");
      const mensagem = document.getElementById("mensagem");
      mensagem.textContent = "Erro ao realizar o cadastro!";
      mensagem.classList.remove("mensagem-sucesso");
      mensagem.classList.add("mensagem-erro");
      console.log(error);
    });
}

function togglePasswordVisibility() {
  const senhaInput = document.getElementById("senha");
  const type =
    senhaInput.getAttribute("type") === "password" ? "text" : "password";
  senhaInput.setAttribute("type", type);
}
