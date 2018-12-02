var cor = document.getElementById("btnCor");
inputTexto.textContent = inputTexto;
var texto = document.getElementById("inputTexto");

function criarNota(){
	console.log(cor.value);
	console.log(texto.value);

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
	var btn3 = document.createElement("button");
	var incone1 = document.createElement("i");
	var incone2 = document.createElement("i");
	var incone3 = document.createElement("i");

	//// Hierarquia dos Elementos ////

	/* Div Principal */
	document.getElementById("notas").appendChild(nota);
	nota.appendChild(divTexto);
	nota.appendChild(divBotoes);

	/* Div de Texto*/
	divTexto.appendChild(paragrafo);
	paragrafo.appendChild(exTexto);

	/* Div de Botões */
	divBotoes.appendChild(btn1); 	
	divBotoes.appendChild(btn2); 
	divBotoes.appendChild(btn3);
	btn1.appendChild(incone1);
	btn2.appendChild(incone2);
	btn3.appendChild(incone3);

	//// Colocando Classes nos Elementos ////

	/* Div Principal */
	nota.classList.add("nota");
	nota.style.backgroundColor = cor.value;

	/* Div de Texto*/
	divTexto.classList.add("divTexto");

	/* Div de Botões */
	divBotoes.classList.add("divBotoes");
	btn1.classList.add("btn");
	btn2.classList.add("btn");	
	btn3.classList.add("btn");
	incone1.classList.add("fa-trash-alt", "fas");
	incone2.classList.add("fa-edit", "fas");
	incone3.classList.add("fa-check", "fas");	
}

btnAdd.addEventListener("click", function(event) {
	event.preventDefault();

	criarNota();

});