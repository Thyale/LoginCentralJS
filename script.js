var transparencia = window.document.querySelector("div.Transparencia")
var btnfechar = window.document.querySelector("div.fechar")
var formulario = window.document.querySelector("div.formulario")

function abrir(){
  transparencia.style.display = "block"
  btnfechar.style.display = "block"
  formulario.style.display = "block"
}

function fechar() {
  transparencia.style.display = "none"
  btnfechar.style.display = "none"
  formulario.style.display = "none"
}