let nome 
let idade 
let peso 
let altura 
let profissao 
    function Gelada(idade) {
        if(idade >= 18 ){
           resultado = console.log("Está liberado para tomar umas geladas")
        }else{
            resultado = console.log("Sem gelada para você")
    }
     return resultado;
}
  function IMC (peso , altura ){
        let resultado = 0
        a = peso/ (altura * altura )
    switch (true) {
        case a < 18.15 :
            resultado = console.log("Magreza")
            break;
        case 18.15 <= a < 24.9  :
            resultado = console.log("Normal")
            break;  
        case 24.9<=  a < 30: 
            resultado = console.log("sobrepeso")
            break;
        case  a > 30 : 
        resultado = console.log("obesidade")
            break;
        default:
        resultado = console.log("ERRO")
            break; 

    } 
        return resultado;
  }
    function anonascimento (idade){
    resultado = 2023 - idade 
        return resultado;
}
function decomposicaodoano (idade){
       let semanas
       let dias 
       let meses 
       let resultado
       dias = idade * 365 
       meses = idade * 30 
       semanas = 4 * meses 
    resultado = console.log("Você tem "+dias+" dias, "+semanas+" semanas e "+meses+" meses de vida.")
    return resultado; 
}

nome = prompt("Digite seu nome: ")
idade = Number(prompt("Digite sua idade: "))
peso = Number(prompt("Digite seu peso: "))
altura = Number(prompt("Digite sua altura: "))
profissao = prompt("Digite sua profissao: ")
    console.log ("Olá "+nome+" , você tem " +idade+" anos, é" + profissao+" , tem "+ altura +"M de altura e pesa"+peso )
    Gelada(idade)
    IMC (peso, altura )
    decomposicaodoano(idade)
    anonascimento(idade)
    do{
        let continuar =prompt("Deseja inserir os dados novamente ? S/N")
    }
    while (continuar == "s")    