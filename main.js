let textoInput = document.getElementById("input_texto");
let textoOutput = document.getElementById("output_texto");
let botonEncriptado = document.getElementById("btn_encriptar");
let botonDesencriptado = document.getElementById("btn_desencriptar");
let botonCopiar = document.getElementById("btn_copiar");
let outputDefault = document.getElementsByClassName("output_vacio");
let outputCompleto = document.getElementsByClassName("output_completo");


function esSoloMinusculasYÑ(texto) {
    for (let i = 0; i < texto.length; i++) {
      const charCode = texto.charCodeAt(i);
      if (!((charCode >= 97 && charCode <= 122) || charCode === 241 || charCode === 32)) {
        return false;
      }
    }
    return true;
  }

function verificarTextoValido(texto){
    if (texto == ""){
        //aviso de que está vacio
        //console.log("vacio");
        return false;
    }
    if (!esSoloMinusculasYÑ(texto)) {
        // aviso de que tiene mayúsculas o símbolos
        //console.log("simbolo");
        return false;
    }
    else{
        //console.log("good");
        return true;
    }

}

function mostrarResultado(texto){
    outputDefault[0].style.display = "none";
    outputCompleto[0].style.display = "flex";
    textoOutput.value = texto;

}

function encriptar(){
    if (verificarTextoValido(textoInput.value)){
        let mensaje = textoInput.value;
        mensaje = mensaje.replace(/e/g, "enter");
        mensaje = mensaje.replace(/i/g, "imes");
        mensaje = mensaje.replace(/a/g, "ai");
        mensaje = mensaje.replace(/o/g, "ober");
        mensaje = mensaje.replace(/u/g, "ufat");
        mostrarResultado(mensaje);
    }
}


function desencriptar(){
    if (verificarTextoValido(textoInput.value)){
        let mensaje = textoInput.value;
        mensaje = mensaje.replace(/enter/g, "e");
        mensaje = mensaje.replace(/imes/g, "i");
        mensaje = mensaje.replace(/ai/g, "a");
        mensaje = mensaje.replace(/ober/g, "o");
        mensaje = mensaje.replace(/ufat/g, "u");
        mostrarResultado(mensaje);
    }
}

function copiar(){
    navigator.clipboard.writeText(textoOutput.value);
}

botonEncriptado.onclick = encriptar;
botonDesencriptado.onclick = desencriptar;
botonCopiar.onclick = copiar;