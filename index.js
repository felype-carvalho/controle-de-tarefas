var cor = document.getElementById("btnCor").value;
inputTexto.textContent = inputTexto;
var texto = document.getElementById("inputTexto");
//console.log(cor)
btnAdd.addEventListener("click", function(event) {
	event.preventDefault();

	criarNota();
	/*console.log(cor);
	console.log(texto.value);
	*/
});

function criarNota(texto, cor){
	console.log("iae");

	var nota = document.createElement("div");
	var divNota = document.createElement("div");
	var exTexto = document.createTextNode("p");

	nota.appendChild(divNota);
	divNota.appendChild(exTexto);
	document.getElementById("notas").appendChild(nota);

	nota.classList.add("nota");

//var notas = document.createElement();
/*
create.Element(div maior);

	create.Element(texto.div);
		create.Element(texto digitado);

	create.Element(icones.div);

		create.Element(icone.div);
			create.Element(icone);
		create.Element(icone.div);
			create.Element(icone);
		create.Element(icone.div);
			create.Element(icone);
*/	
}
