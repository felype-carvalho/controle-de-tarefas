var cor = document.getElementById("btnCor");
inputTexto.textContent = inputTexto;
var texto = document.getElementById("inputTexto");
var btnApagar = document.getElementById("btnApagar");
var notas = document.querySelector("#notas");

function criarNota(){

	//// Criação dos elementos da nota.////

	/* Div Principal */
	var nota = document.createElement("div");

	/* Div de Texto*/
	var divTexto = document.createElement("div");
	var paragrafo = document.createElement("p");
	var exTexto = document.createTextNode(texto.value);

	/* Div de Botões */
	var divBotoes = document.createElement("div");
	var btn1 = document.createElement("button");	
	var btn2 = document.createElement("button");
	var incone1 = document.createElement("i");
	var incone2 = document.createElement("i");

	//// Hierarquia dos Elementos ////

	/* Div Principal */
	notas.appendChild(nota);
	nota.appendChild(divTexto);
	nota.appendChild(divBotoes);

	/* Div de Texto*/
	divTexto.appendChild(paragrafo);
	paragrafo.appendChild(exTexto);

	/* Div de Botões */
	divBotoes.appendChild(btn1); 	
	divBotoes.appendChild(btn2); 
	btn1.appendChild(incone1);
	btn2.appendChild(incone2);

	//// Colocando Classes nos Elementos ////

	/* Div Principal */
	nota.classList.add("nota");
	nota.style.backgroundColor = cor.value;

	/* Div de Texto*/
	divTexto.classList.add("divTexto");

	/* Div de Botões */
	divBotoes.classList.add("divBotoes");
	btn1.classList.add("btn", "btn-apagar");
	btn2.classList.add("btn");	
	incone1.classList.add("fa-trash-alt", "fas");
	incone2.classList.add("fa-edit", "fas");

	// Escutadores de Eventos //
	btn1.addEventListener("click", apagarNota);
	btn2.addEventListener("click", editarNota);	
}


function apagarNota (event) {
		var nota;
		if(event.target.hasChildNodes()) {
			nota = event.target.parentNode.parentNode;
		} else {
			nota = event.target.parentNode.parentNode.parentNode;
		}
		nota.classList.add("fade-out");

		setTimeout(function(){
			nota.remove();
		}, 1000);
		return btnApagar;
}

var btnApagar = document.querySelectorAll(".btn-apagar");
btnApagar.forEach(function(botao){
	botao.addEventListener("click", apagarNota);
});

function criarBotão (event) {
	var inconeSalvar = document.createElement("i");
	var btnSalvar = document.createElement("button");
	btnSalvar.appendChild(inconeSalvar);
	btnSalvar.classList.add("btn");
	inconeSalvar.classList.add("fas", "fa-check");
	return btnSalvar;
}

function editarNota (event) {
	console.log("PEEEEI");
	/*if(event.target.hasChildNodes()) {
		linha = event.target.parentNode.parentNode;
	} else {
		linha = event.target.parentNode.parentNode.parentNode;
	}
	var nome = linha.querySelector(".nome").textContent;
	var qtde = linha.querySelector(".qtde").textContent;
	var preco = linha.querySelector(".preco").textContent;

	form.nome.value = nome;
	form.qtde.value = qtde;
	form.preco.value = preco;

	btnSalvar.classList.add('invisivel');
	form.appendChild(btnConfirmar);*/
};

var btnEditar = document.querySelectorAll(".btn-editar");
btnEditar.forEach(function(botao){
	botao.addEventListener("click", editarNota);
});

btnAdd.addEventListener("click", function(event) {
	event.preventDefault();

	criarNota();

});