let frutas = [
  "Abacate",
  "Abacaxi",
  "Açaí",
  "Acerola",
  "Amora",
  "Banana",
  "Caju",
  "Carambola",
  "Cereja",
  "Coco",
  "Figo",
  "Goiaba",
  "Grapes",
  "Jabuticaba",
  "Kiwi",
  "Laranja",
  "Limão",
  "Maçã",
  "Mamão",
  "Manga",
  "Maracujá",
  "Melancia",
  "Melão",
  "Morango",
  "Pera",
  "Pêssego",
  "Pitanga",
  "Romã",
  "Tangerina",
  "Uva",
  "Amaranto",
  "Amendoim",
  "Arroz",
  "Aveia",
  "Centeio",
  "Cevada",
  "Feijão",
  "Girassol",
  "Grão-de-bico",
  "Lentilha",
  "Linhaça",
  "Milho",
  "Quinoa",
  "Soja",
  "Trigo",
  "Abóbora",
  "Berinjela",
  "Cenoura",
  "Chuchu",
  "Couve",
  "Espinafre",
  "Pepino",
  "Pimentão",
  "Tomate"
]
 
let verduras = [
  "Acelga",
  "Agrião",
  "Alface",
  "Alho-poró",
  "Aspargo",
  "Batata-doce",
  "Berinjela",
  "Beterraba",
  "Brócolis",
  "Cebola",
  "Cebolinha",
  "Cenoura",
  "Chicória",
  "Coentro",
  "Couve",
  "Couve-de-bruxelas",
  "Couve-flor",
  "Endívia",
  "Espinafre",
  "Funcho",
  "Gengibre",
  "Inhame",
  "Jiló",
  "Lentilha",
  "Mandioca",
  "Manjericão",
  "Mostarda",
  "Nabo",
  "Palmito",
  "Pepino",
  "Pimentão",
  "Quiabo",
  "Rabanete",
  "Repolho",
  "Rúcula",
  "Salsão",
  "Salsa",
  "Serralha",
  "Taioba",
  "Tomate",
  "Tomilho",
  "Vagem",
  "Alfavaca",
  "Beldroega",
  "Catalonha",
  "Chicória-do-campo",
  "Dente-de-leão",
  "Hortelã",
  "Ora-pro-nóbis",
  "Rúcula-selvagem",
  "Serralha"
]

let legumes = [
  "Abóbora",
  "Abobrinha",
  "Alcachofra",
  "Alho",
  "Batata",
  "Batata-baroa",
  "Batata-yacon",
  "Berinjela",
  "Beterraba",
  "Cenoura",
  "Chuchu",
  "Cogumelo",
  "Ervilha",
  "Feijão-verde",
  "Gengibre",
  "Grão-de-bico",
  "Jiló",
  "Mandioca",
  "Milho",
  "Nabo",
  "Palmito",
  "Pepino",
  "Pimentão",
  "Quiabo",
  "Rabanete",
  "Repolho",
  "Salsão",
  "Tomate",
  "Vagem",
  "Abobrinha-italiana",
  "Aipo",
  "Aspargo",
  "Beterraba-amarela",
  "Brócolis",
  "Cebola",
  "Cenoura-roxa",
  "Cenoura-salsão",
  "Cenoura-amarela",
  "Cenoura-branca",
  "Cenoura-roxa",
  "Cenoura-salsão",
  "Cenoura-amarela",
  "Cenoura-branca",
  "Chuchu-japonês",
  "Chuchu-paulista",
  "Chuchu-holandês",
  "Ervilha-torta",
  "Fava",
  "Jiló-japonês",
  "Jiló-paulista",
  "Jiló-holandês",
  "Palmito-pupunha",
  "Palmito-juçara"
]

let carnesBovinas = [
  'Filé Mignon',
  'Contrafilé',
  'Alcatra',
  'Picanha',
  'Maminha',
  'Fraldinha',
  'Cupim',
  'Acém',
  'Costela',
  'Rabo',
  'Patinho',
  'Coxão Duro',
  'Coxão Mole',
  'Lagarto',
  'Ponta de Agulha',
  'Paleta',
  'Capa de Filé',
  'Costela Ponta de Agulha',
  'Entrecôte',
  'Chuletão'
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

const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector(".input1"),
options = wrapper.querySelector(".options");

const wrapperverdura = document.querySelector(".wrapperverdura"),
selectBtnverdura = wrapperverdura.querySelector(".select-btnverdura"),
searchInpverdura = wrapperverdura.querySelector(".input1verdura"),
optionsverdura = wrapperverdura.querySelector(".optionsverdura");

// const wrapperlegume = wrapperlegume.querySelector(".wrapperlegume"),
// selectBtnlegume = wrapperlegume.querySelector(".select-btnlegume"),
// searchInplegume = wrapperlegume.querySelector(".input1legume"),
// optionslegume = wrapperlegume.querySelector(".optionslegume");

let frutaSelect;
let verduraSelect;

function addFruta(selectedFruta) {
  options.innerHTML = "";
  frutas.forEach(fruta => {
      let isSelected = fruta == selectedFruta ? "selected" : "";
      let li = `<li onclick="updateFruta(this)" class="${isSelected}">${fruta}</li>`;
      frutaSelect = fruta;
      options.insertAdjacentHTML("beforeend", li);
  });
}
addFruta();

function updateFruta(selectedLi) {
  searchInp.value = "";
  addFruta(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = countries.filter(data => {
      return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
      let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
  }).join("");
  options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Não encontrado.</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));


function addverdura(selectedverdura) {
  optionsverdura.innerHTML = "";
  verduras.forEach(verdura => {
      let isSelected = verdura == selectedverdura ? "selected" : "";
      let li = `<li onclick="updateVerdura(this)" class="${isSelected}">${verdura}</li>`;
      verduraSelect = verdura;
      optionsverdura.insertAdjacentHTML("beforeend", li);
  });
}
addverdura();

function updateVerdura(selectedLi) {
  searchInpverdura.value = "";
  addverdura(selectedLi.innerText);
  wrapperverdura.classList.remove("active");
  selectBtnverdura.firstElementChild.innerText = selectedLi.innerText;
}

searchInpverdura.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInpverdura.value.toLowerCase();
  arr = countries.filter(data => {
      return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
      let isSelected = data == selectBtnverdura.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
  }).join("");
  optionsverdura.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Não encontrado.</p>`;
});

selectBtnverdura.addEventListener("click", () => wrapperverdura.classList.toggle("active"));

// function addLegume(selectedLegume) {
//   optionslegume.innerHTML = "";
//   legumes.forEach(legumes => {
//       let isSelected = legumes == selectedLegume ? "selected" : "";
//       let li = `<li onclick="updateLegume(this)" class="${isSelected}">${legumes}</li>`;
//       legumesSelect = legumes;
//       optionslegume.insertAdjacentHTML("beforeend", li);
//   });
// }
// addLegume();

// function updateLegume(selectedLi) {
//   searchInplegume.value = "";
//   updateLegume(selectedLi.innerText);
//   wrapperlegume.classList.remove("active");
//   selectBtnlegume.firstElementChild.innerText = selectedLi.innerText;
// }

// searchInplegume.addEventListener("keyup", () => {
//   let arr = [];
//   let searchWord = searchInplegume.value.toLowerCase();
//   arr = countries.filter(data => {
//       return data.toLowerCase().startsWith(searchWord);
//   }).map(data => {
//       let isSelected = data == selectBtnlegume.firstElementChild.innerText ? "selected" : "";
//       return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
//   }).join("");
//   optionslegume.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Não encontrado.</p>`;
// });

// selectBtnlegume.addEventListener("click", () => wrapper.classList.toggle("active"));