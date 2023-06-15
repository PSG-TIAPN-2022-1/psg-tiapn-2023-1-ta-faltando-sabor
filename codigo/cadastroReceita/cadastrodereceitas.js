function cadastrarreceita()
{
    var tituloReceita = document.getElementById("tituloReceita").value;
    var descricao = document.getElementById("descricao").value;
    var modoPreparo = document.getElementById("modoPreparo").value;
    var ingredientes = document.getElementById("ingredientes").value;
    var img = document.getElementById("img").value;

    if (tituloReceita === "" || descricao === "" || modoPreparo === "" || ingredientes === "" || img === "")
    {
        return window.alert("Preencha todos os campos!");
    }

    const values = {
        tituloReceita: tituloReceita,
        descricao: descricao,
        modoPreparo: modoPreparo,
        ingredientes: ingredientes,
        img: img
    };


    axios.post('http://localhost:3000/receita', values).then((result) => {
        console.log(result);
        
    }).catch((err) => {
        console.log(err);   
    });
}