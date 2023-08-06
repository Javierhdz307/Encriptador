const textArea = document.querySelector(".text-area");
const message = document.querySelector(".resultado");

const messagenulo = document.querySelector(".message-nulo");
const image = document.querySelector(".image");
const containerparrafo = document.querySelector(".container-parrafo");
const containermessage = document.querySelector(".container-resultado");
const button = document.querySelector(".button");
const btncopiar = document.querySelector(".btn-copiar");
const btnencriptar = document.querySelector(".btn-encriptar");
const btndesencriptar = document.querySelector(".btn-desencriptar");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar(){
	const Areatxt = textArea.value
	if(Areatxt.trim = ""){
		if(image.classList.contains('ocultar') && messagenulo.classList.contains('ocultar') && containerparrafo.classList.contains('ocultar')){
			ocultarResultados();
			mostrarSinResultados();
		}
	}else{
		ocultarSinResultados();
		mostrarResultados();
		var textoEncriptado = '';
        let obj_letters = {
            a: 'ai',
            e: 'enter',
            i: 'imes',
            o: 'ober',
            u: 'ufat',
        };

        textoEncriptado = Areatxt.replace( /a|e|i|o|u/g, function(matched){return obj_letters[matched]});
        console.log(textoEncriptado);
        message.textContent = textoEncriptado;

	}
}

/*function encriptar(stringEncriptado){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringEncriptado = stringEncriptado.toLowerCase()

	for(let i = 0; i < matrizCodigo.lenght; i++){
		if(stringEncriptado.includes(matrizCodigo[i][0])){
			stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return stringEncriptado
}*/


function desencriptar(){
	const Areatxt = textArea.value
	if(Areatxt.trim = ""){
		if(image.classList.contains('ocultar') && messagenulo.classList.contains('ocultar') && containerparrafo.classList.contains('ocultar')){
			ocultarResultados();
			mostrarSinResultados();
		}
	}else{
		ocultarSinResultados();
		mostrarResultados();
		var textoDesencriptado = '';
        let obj_letters = {
            ai: 'a',
            enter: 'e',
            imes: 'i',
            ober: 'o',
            ufat: 'u',
        };

        textoDesencriptado = Areatxt.replace( /ai|enter|imes|ober|ufat/g, function(matched){return obj_letters[matched]});
        console.log(textoDesencriptado);
        message.textContent = textoDesencriptado;

	}
}

/*function desencriptar(stringDesencriptado){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringDesencriptado = stringDesencriptado.toLowerCase()

	for(let i = 0; i < matrizCodigo.lenght; i++){
		if(stringDesencriptado.includes(matrizCodigo[i][1])){
			stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}
	}
	return stringDesencriptado
}*/

function copiar(){
    let textCopy = message.textContent;
    if(textCopy.trim() == ''){
        alert('Caja vacia');
    }else{
        navigator.clipboard.writeText(textCopy);

	}
}

//funciones del contenedor derecho
function mostrarResultados(){
containermessage.classList.remove('ocultar');
button.classList.remove('ocultar');
btncopiar.classList.remove('ocultar');
}
function ocultarResultados(){
containermessage.classList.add('ocultar');
button.classList.add('ocultar');
btncopiar.classList.add('ocultar');
}

function mostrarSinResultados(){
messagenulo.classList.remove('ocultar');
image.classList.remove('ocultar');
containerparrafo.classList.remove('ocultar');
}
function ocultarSinResultados(){
messagenulo.classList.add('ocultar');
image.classList.add('ocultar');
containerparrafo.classList.add('ocultar');
}

document.addEventListener('DOMContentLoaded', ocultarResultados);

btnencriptar.addEventListener('click', encriptar);
btndesencriptar.addEventListener('click', desencriptar);
btncopiar.addEventListener('click', copiar);