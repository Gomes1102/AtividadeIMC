
let altura = 1.85

let peso = 87

let resposta = peso/(altura*altura)
let num = resposta.toFixed(2);
let situacao 

if (resposta<18.5){
    situacao = "Abaixo do Peso"
}
else if(resposta<24.9){
    situacao = "Peso Normal"
}
else if(resposta <29.9){
    situacao = "Sobrepeso"
}
else if(resposta<34.9){
    situacao = "Obesidade Grau 1"
}
else if(resposta<39.9){
    situacao  = "Obesidade Grau 2"
}
else if(resposta>40){
    situacao = "Obesidade Grau 3"
}

 let alturatext = document.getElementById("alturatext")
 let = pesotext = document.getElementById("pesotext")
 let situacaotext = document.getElementById("situacaotext")
 let imc = document.getElementById("imc")  

 imc.textContent = num
 situacaotext.textContent = situacao
 alturatext.textContent = altura
 pesotext.textContent = peso