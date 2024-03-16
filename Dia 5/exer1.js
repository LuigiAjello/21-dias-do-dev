
let resultado 
let num1 = Number(prompt("Digite um numero")) 
let num2 = Number(prompt("Digite um numero")) 
let operador= Number(prompt("escolha a operção:" + "\n1 = +; \n2 = -; \n3 = *  \n4 =!"))
switch (operador){
    case operador = 1: 
        resultado = Number(num1 + num2)  
        console.log(resultado)
        break;
    case operador = 2:
        resultado = Number(num1 - num2)
        console.log(resultado)
        break;
    case operador = 3:
        resultado = Number(num1 * num2)
        console.log(resultado)
        break;
    case operador = 4:
        resultado = Number(num1 / num2)
        console.log(resultado)  
        break;
    default: 
        console.log("Digite um operador valido")
 }