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

let massas = [
  'Espaguete',
  'Macarrão Penne',
  'Ravióli',
  'Lasanha',
  'Talharim',
  'Fusilli',
  'Farfalle',
  'Macarrão Instantâneo',
  'Canelone',
  'Nhoque',
  'Tagliatelle',
  'Spätzle',
  'Macarrão de Arroz',
  'Linguine',
  'Pappardelle'
];

let carnesw = [
  'Alcatra',
  'Filé Mignon',
  'Picanha',
  'Coxão Duro',
  'Contrafilé',
  'Costela',
  'Fraldinha',
  'Maminha',
  'Paleta',
  'Patinho',
  'Lagarto',
  'Fígado',
  'Cordeiro',
  'Porco',
  'Frango'
];

let frutaSelect;
let verduraSelect;
let legumesSelect;
let carnesSelect;
let massasSelect;
let outrosSelect;

  function atualizaTable(e){
    const tabela = document.getElementById('tabela-dados');

    
    const tbody = tabela.querySelector('tbody');
    
    tbody.innerHTML = '';
    
    e.forEach((item) => {
      const row = tbody.insertRow();
      const cellNome = row.insertCell();
      const cellIdade = row.insertCell();
      const cellEmail = row.insertCell();
      const cellAcao = row.insertCell();
      
      cellEmail.textContent = item.ingredientes;
      cellNome.textContent = item.tituloReceita;
      cellIdade.textContent = item.descricao;
      const button = document.createElement('button');
      button.innerHTML = '<i class="fa fa-download"></i> Baixar';
      button.addEventListener('click', () => {
        // Criar o conteúdo do arquivo de texto
        const content = `Receita: ${item.tituloReceita}\nModo de preparo: ${item.modoPreparo}\nIngredientes: ${item.ingredientes}`;
      
        // Criar um elemento <a> temporário
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
        link.download = 'receita.txt';
      
        // Adicionar o elemento <a> temporário ao documento
        document.body.appendChild(link);
      
        // Simular o clique no link para iniciar o download
        link.click();
      
        // Remover o elemento <a> temporário do documento
        document.body.removeChild(link);
      });
      
      cellAcao.appendChild(button);
    });
  }



  function buscarReceita(){
    const btnDados = document.getElementById("divTable");
    btnDados.style.display = "block"
    const ingredientes = `${frutaSelect},${verduraSelect},${legumesSelect}`

    axios.get(`http://localhost:3000/receitas?ingredientes=${ingredientes}`)
      .then(response => {
       let dade = response.data;
       atualizaTable(dade);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function limparReceita(){
    const btnDados = document.getElementById("divTable");
    btnDados.style.display = "none"
  }

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

const wrapperlegume = document.querySelector(".wrapperlegume"),
selectBtnlegume = wrapperlegume.querySelector(".select-btnlegume"),
searchInplegume = wrapperlegume.querySelector(".input1legume"),
optionslegume = wrapperlegume.querySelector(".optionslegume");

const wrappercarnes = document.querySelector(".wrappercarnes"),
selectBtncarnes = wrappercarnes.querySelector(".select-btncarnes"),
searchInpcarnes = wrappercarnes.querySelector(".input1carnes"),
optionscarnes = wrappercarnes.querySelector(".optionscarnes");

const wrappermassas = document.querySelector(".wrappermassas"),
selectBtnmassas = wrappermassas.querySelector(".select-btnmassas"),
searchInpmassas = wrappermassas.querySelector(".input1massas"),
optionsmassas = wrappermassas.querySelector(".optionsmassas");

const wrapperoutros = document.querySelector(".wrapperoutros"),
selectBtnoutros = wrapperlegume.querySelector(".select-btnoutros"),
searchInpoutros = wrapperlegume.querySelector(".input1outros"),
optionsOutros = wrapperlegume.querySelector(".optionsoutros");



function addFruta(selectedFruta) {
  options.innerHTML = "";
  frutas.forEach(fruta => {
      let isSelected = fruta == selectedFruta ? "selected" : "";
      let li = `<li onclick="updateFruta(this)" class="${isSelected}">${fruta}</li>`;
      options.insertAdjacentHTML("beforeend", li);
  });
}
addFruta();

function updateFruta(selectedLi) {
  searchInp.value = "";
  frutaSelect = selectedLi.innerText;
  addFruta(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = frutas.filter(data => {
      return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
      let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateFruta(this)" class="${isSelected}">${data}</li>`;
  }).join("");
  options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Não encontrado.</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));


function addverdura(selectedverdura) {
  optionsverdura.innerHTML = "";
  verduras.forEach(verdura => {
      let isSelected = verdura == selectedverdura ? "selected" : "";
      let li = `<li onclick="updateVerdura(this)" class="${isSelected}">${verdura}</li>`;
      optionsverdura.insertAdjacentHTML("beforeend", li);
  });
}
addverdura();

function updateVerdura(selectedLi) {
  searchInpverdura.value = "";
  verduraSelect = selectedLi.innerText;
  addverdura(selectedLi.innerText);
  wrapperverdura.classList.remove("active");
  selectBtnverdura.firstElementChild.innerText = selectedLi.innerText;
}

searchInpverdura.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInpverdura.value.toLowerCase();
  arr = verduras.filter(data => {
      return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
      let isSelected = data == selectBtnverdura.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateVerdura(this)" class="${isSelected}">${data}</li>`;
  }).join("");
  optionsverdura.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Não encontrado.</p>`;
});

selectBtnverdura.addEventListener("click", () => wrapperverdura.classList.toggle("active"));

function addLegume(selectedLegume) {
  optionslegume.innerHTML = "";
  legumes.forEach(legumes => {
      let isSelected = legumes == selectedLegume ? "selected" : "";
      let li = `<li onclick="updateLegume(this)" class="${isSelected}">${legumes}</li>`;
      optionslegume.insertAdjacentHTML("beforeend", li);
  });
}
addLegume();

function updateLegume(selectedLi) {
  searchInplegume.value = "";
  legumesSelect = selectedLi.innerText;
  addLegume(selectedLi.innerText);
  wrapperlegume.classList.remove("active");
  selectBtnlegume.firstElementChild.innerText = selectedLi.innerText;
}

searchInplegume.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInplegume.value.toLowerCase();
  arr = legumes.filter(data => {
      return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
      let isSelected = data == selectBtnlegume.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateLegume(this)" class="${isSelected}">${data}</li>`;
  }).join("");
  optionslegume.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Não encontrado.</p>`;
});

selectBtnlegume.addEventListener("click", () => wrapperlegume.classList.toggle("active"));

function addCarnes(selectedCarnes) {
  optionscarnes.innerHTML = "";
  carnesw.forEach(carnes => {
      let isSelected = carnes == selectedCarnes ? "selected" : "";
      let li = `<li onclick="updateCarnes(this)" class="${isSelected}">${carnes}</li>`;
      optionscarnes.insertAdjacentHTML("beforeend", li);
  });
}
addCarnes();

function updateCarnes(selectedLi) {
  searchInpcarnes.value = "";
  carnesSelect = selectedLi.innerText;
  addCarnes(selectedLi.innerText);
  wrappercarnes.classList.remove("active");
  selectBtncarnes.firstElementChild.innerText = selectedLi.innerText;
}

searchInpcarnes.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInpcarnes.value.toLowerCase();
  arr = carnesw.filter(data => {
      return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
      let isSelected = data == selectBtncarnes.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateCarnes(this)" class="${isSelected}">${data}</li>`;
  }).join("");
  optionscarnes.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Não encontrado.</p>`;
});

selectBtncarnes.addEventListener("click", () => wrappercarnes.classList.toggle("active"));

function addMassas(selectedMassas) {
  optionsmassas.innerHTML = "";
  massas.forEach(massas => {
      let isSelected = massas == selectedMassas ? "selected" : "";
      let li = `<li onclick="updateMassas(this)" class="${isSelected}">${massas}</li>`;
      optionsmassas.insertAdjacentHTML("beforeend", li);
  });
}
addMassas();

function updateMassas(selectedLi) {
  searchInpmassas.value = "";
  massasSelect = selectedLi.innerText;
  addMassas(selectedLi.innerText);
  wrappermassas.classList.remove("active");
  selectBtnmassas.firstElementChild.innerText = selectedLi.innerText;
}

searchInpmassas.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInpmassas.value.toLowerCase();
  arr = massas.filter(data => {
      return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
      let isSelected = data == selectBtnmassas.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateMassas(this)" class="${isSelected}">${data}</li>`;
  }).join("");
  optionsmassas.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Não encontrado.</p>`;
});

selectBtnmassas.addEventListener("click", () => wrappermassas.classList.toggle("active"));

