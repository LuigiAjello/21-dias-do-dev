let pagamento = 0
let litros = 0 
//let escolha = 0  
let escolha = Number(prompt("O que o senh@r deseja? " + "\n1 = abastecer com GASOLINA; \n2 = abastecer com ÄLCOOL; \n3 = CALIBRAR OS PNEUS  "))
switch(escolha){
    case 1: 
            pagamento = Number(prompt("Quanto reais você gostaria de abastecer com gasolina?"))  
            litros = (pagamento / 5)
            console.log("Vão ser "+ litros + " litros senhor" )
        break;
    case 2: 
            pagamento = Number(prompt("Quanto reais você gostaria de abastecer com alcool?"))  
            litros = (pagamento / 3)
            console.log("Vão ser "+ litros + " litros senhor" )
        break;
    case 3 :
            console.log("Pneus calibrados com sucesso!")
        break;
    default:
        console.log("Digite uma alternativa valida...")

}