function login()
{
    const dados = [];

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value; 

    if (email === "" || senha === "")
    {
        return window.alert("Preencha todos os campos!");
    }

    axios.get('http://localhost:3000/usuario').then((result) => {
        dados = result.data;
        
    }).catch((err) => {
        console.log(err);   
    });

    // Mudar função
    if (dados.email === email) {
        if (dados.senha === senha) {
            // Colocar no local storage variável que retornará se o usuário está logado ou não
        }
        window.alert("Senha incorreta!");
        return;
    } return window.alert("Email não cadastrado!");
}