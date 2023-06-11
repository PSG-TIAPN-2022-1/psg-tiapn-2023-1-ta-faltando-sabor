function fazerLogin() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
  
    // Codigo pra validar email (Será implementado depois)
    function validarEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    if (!validarEmail(email)) {
      console.log("Endereço de e-mail inválido!");
      return;
    }
  
    if (email === "" || senha === "") {
      return window.alert("Preencha todos os campos!");
    }
  
    const values = {
      email: email,
      senha: senha,
    };
  
    axios.post("http://localhost:3000/usuario", values)
      .then((response) => {
        const mensagem = document.getElementById("mensagem");
        if (response.data === true) {
          mensagem.textContent = "Login realizado com sucesso!";
          mensagem.classList.add("mensagem-sucesso");
          // Redirecionar para outra página
        } else {
          mensagem.textContent = "Erro! Usuário ou senha inválidos!";
          mensagem.classList.add("mensagem-erro");
          mensagem.classList.remove("mensagem-sucesso");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  function togglePasswordVisibility() {
    const senhaInput = document.getElementById("senha");
    const type =
      senhaInput.getAttribute("type") === "password" ? "text" : "password";
    senhaInput.setAttribute("type", type);
  }
  