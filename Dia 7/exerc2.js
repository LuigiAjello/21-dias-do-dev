let saldo = 2000
let maiorvalorinserido = 0 
let mediavalorinserido = 0 
let continuar = false
        do{      
let nome = prompt("Digite o nome do usuario: ")
let CPF = Number(prompt(nome + " Digite seu CPF: "))
let valor = Number(prompt(nome + " insira um valor: "))
let operacao = Number(prompt(nome, + " Digite 1 para saque e 2 para deposito:"))
            if(valor < 0 ){
                console.log("Valor negativo, tente novamente ")
             }else{
            if(operacao = 1){
            if(valor > saldo ){
                  console.log("valor maior que o saldo")    
             }else{
            saldo -= valor
        }
            }else if(operacao = 2){
            saldo+=valor
    }
}           
let opcao = Number(prompt(nome + " Digite 1 para continuar e 2 para fazer outra operacao:"))
if(opcao = 1){
    continuar = true 
}else{
    continuar= false
}
        }while(continuar = true)


