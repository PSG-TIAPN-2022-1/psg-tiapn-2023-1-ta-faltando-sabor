var frutas = [
    "Abacaxi",
    "Banana",
    "Caju",
    "Caqui",
    "Cereja",
    "Framboesa",
    "Goiaba",
    "Laranja",
    "Limão",
    "Maçã",
    "Manga",
    "Melancia",
    "Melão",
    "Morango",
    "Pera",
    "Pêssego",
    "Uva",
    "Uva Passa"
  ];
  
  function filtrarFrutas() {
    var filtroInput = document.getElementById("filtro");
    var select = document.getElementById("frutasSelect");
    var filtro = filtroInput.value.toLowerCase();
    select.innerHTML = "";
  
    var frutasFiltradas = frutas.filter(function(fruta) {
      return fruta.toLowerCase().includes(filtro);
    });
  
    frutasFiltradas.forEach(function(fruta) {
      var option = document.createElement("option");
      option.text = fruta;
      select.add(option);
    });
  }