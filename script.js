// beginner
window.alert("Olá, eu sou o JavaScript, muito prazer.")
window.prompt("Qual seu nome?")
window.confirm("Está achando o JS fácil? ")

// média
window.alert("Vamos verificar sua média.");
var nota1 = Number(window.prompt("Digite sua primeira nota: "))
var nota2 = Number(window.prompt("Digite sua segunda nota: "))
var soma = (nota1+nota2)/2
window.alert("A média entre as notas é " + soma)

// diferença
window.alert("Vamos verificar sua diferença.");
var nota1 = Number(window.prompt("Digite sua primeira nota: "))
var nota2 = Number(window.prompt("Digite sua segunda nota: "))
var diferença = nota1-nota2
if (diferença < 0) {
    diferença * -1
}
window.alert("A diferença entre as notas é " + diferença)

// número par
window.alert("Vamos verificar se o número é par.");
var numero = Number(window.prompt("Digite o número: "));
if (numero % 2 === 0) {
window.alert("O número é par.");
} else { 
window.alert("O número é ímpar.");
}

// múltiplo
window.alert("Vamos verificar se é múltiplo.");
var nota3 = Number(window.prompt("Digite sua primeira nota: "))
var nota4 = Number(window.prompt("Digite sua segunda nota: "))
if (nota3 % nota4 === 0) {
window.alert("O número é divisível/múltiplo.");
} else { 
window.alert("O número não é divisível/múltiplo.");
}

// C pra F 
window.alert("Vamos converter Celcius para Fahrenheit.");
var Celcius = Number(window.prompt("Digite a temperatura em Celcius: "));
F = (Celcius * 9/5) + 32
window.alert("Temperatura em Fahrenheit: " + F)

// área
window.alert("Vamos calcular a área.");
var base = Number(window.prompt("Digite o tamanho da base: "));
var altura = Number(window.prompt("Digite o tamanho da altura: "));
area = base * altura
window.alert("A área é: " + area)


// fixação
// ex 1 - média e par
window.alert("Vamos verificar suas notas.");
var nota5 = Number(window.prompt("Digite sua primeira nota: "))
var nota6 = Number(window.prompt("Digite sua segunda nota: "))
var media = 7
var verificar_media = (nota1+nota2)/2
window.alert("A média entre as notas é " + verificar_media)
if (verificar_media >= 7 && verificar_media % 2 === 0) {
    window.alert("Você ficou na média esperada e é um número par.")
}
if (verificar_media >= 7 && verificar_media % 2 != 0) {
    window.alert("Você ficou na média esperada e é um número ímpar.")
}
else {
    window.alert("Você não ficou na média esperada. Estude mais! ")
}

// ex 2 - IMC
window.alert("Vamos verificar seu IMC.");
var peso = Number(window.prompt("Digite seu peso (KG): "))
var altura = Number(window.prompt("Digite sua altura (CM): "))
var imc = peso/(altura * altura)
window.alert("Seu IMC é " + imc)
if (imc < 18.5) {
    window.alert("Você está com magreza extrema.")
}
if (imc > 18.5 && imc < 25) {
    window.alert("Você está com peso adequado.")
}
if (imc >= 25 && imc < 30) {
    window.alert("Você está com sobrepeso.")
}
if (imc === 30 && imc === 40) {
    window.alert("Você está com obesidade moderada.")
}
if (imc > 40) {
    window.alert("Você está com obesidade severa.")
}

// bissexto
window.alert("Vamos verificar se o ano é bissexto.");
var ano = Number(window.prompt("Digite o ano: "))
if (ano  % 4 === 0) {
    window.alert("O ano é bissexto.")
}
else {
    window.alert("O ano não é bissexto.")
}

// taxa
window.alert("Vamos verificar a taxa.");
var real = Number(window.prompt("Digite valor em reais (R$): "))
dolar = real * 5
window.alert("O valor em dólares fica U$" + dolar)