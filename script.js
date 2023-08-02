//Criar Variaveis

//let nome = "Samuel Santos"
let idade = 45
let idadeEsposa = "45"
const anoNascimento = 1977

//decisão

if (idade === idadeEsposa){
    alert("Igual...")
}else{
    alert("Cada um no seu quadrado!")
}

//Lendo informações HTML

const titulo = document.getElementById("titulo")
const resultado = document.getElementById("resultado")
const nome = document.getElementById("nome")
const email = document.getElementById("email")

titulo.textContent = "Mudei o titulo"

titulo.style.color = "black"

function mostrarResultado(){
    resultado.textContent = nome.value + " " + email.value
}



