function cadastrar()
{
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (nome === "" || idade === "" || email === "" || senha === "")
    {
        return window.alert("Preencha todos os campos!");
    }

    const values = [email, nome, idade, senha];


    axios.post('http://localhost:3000/usuario', values).then((result) => {
        console.log(result);
        
    }).catch((err) => {
        console.log(err);   
    });
}