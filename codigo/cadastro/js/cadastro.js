function cadastrar()
{
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
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
    

    if (nome === "" || idade === "" || email === "" || senha === "")
    {
        return window.alert("Preencha todos os campos!");
    }

    const values = {
        email: email,
        nome: nome,
        idade: idade,
        senha: senha
    };


    axios.post('http://localhost:3000/usuario', values).then((result) => {
        console.log(result);
        
    }).catch((err) => {
        console.log(err);   
    });
}