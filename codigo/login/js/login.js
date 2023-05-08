function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value; 

    if (email === "" || senha === "") {
        return window.alert("Preencha todos os campos!");
    }

    axios.get(`http://localhost:3000/usuario?email=${email}&senha=${senha}`)
    .then((result) => {
        const usuarioAutenticado = result.data[0];
        
        if (usuarioAutenticado) {
            localStorage.setItem('usuarioAutenticado', usuarioAutenticado.email);
            window.alert("Usuário autenticado com sucesso!");
        } else {
            window.alert("Email ou senha incorretos!");
        }
    })
    .catch((err) => {
        console.log(err);   
    });
}


  