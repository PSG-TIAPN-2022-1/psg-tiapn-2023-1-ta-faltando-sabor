function cadastrarreceita()
{
    console.log("oi");
    var tituloReceita = document.getElementById("tituloReceita").value;
    var descricao = document.getElementById("descricao").value;
    var modoPreparo = document.getElementById("modoPreparo").value;
    var ingredientes = document.getElementById("ingredientes").value;
    var email = document.getElementById("email").value;
    var img = "";

    if (tituloReceita === "" || descricao === "" || modoPreparo === "" || ingredientes === "" || email === "" )
    {
        return window.alert("Preencha todos os campos!");
    }

    const values = {
        tituloReceita: tituloReceita,
        descricao: descricao,
        modoPreparo: modoPreparo,
        ingredientes: ingredientes,
        img: img,
        email:email,
    };

  
    
    axios.post('http://localhost:3000/receita', values).then((res) => {
        
        console.log(res);
        
    }).catch((err) => {
        console.log(err);   
    });
}