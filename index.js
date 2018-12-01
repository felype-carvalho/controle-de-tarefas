var cor = document.getElementById("btnCor").value;
inputTexto.textContent = inputTexto;
var texto = document.getElementById("inputTexto");
//console.log(cor)
btnAdd.addEventListener("click", function criarNota(event) {
	event.preventDefault();
	/*console.log(cor);
	console.log(texto.value);
	*/
});

function criarNota(texto, cor){
	console.log("iae");
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
	divNotas.classList.add("divNotas");
}
