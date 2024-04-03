function calculadora(numero1,numero2, operacao){
    let resultado = 1
     switch (operacao) {
         case "+":
                 resultado = numero1 + numero2
             break;
         case "-":
                 resultado  = numero1 - numero2 
             break;
         case "x":
                 resultado = numero1 * numero2
             break;
 
         case "/":
                 resultado = numero1 / numero2
             break;
 
         case "e":
                     if(numero2<0){
                         numero1 = 1/ numero2
                         resultado = -resultado
                                      }
             for(let contador= 0 ;contador < numero2 ; contador++ ){
                         resultado *= numero1
                 }

             break;

         default:
                 console.log("Essa opção não existe ")
             break;
     }
 return resultado 
 
 
 }
 let num1 = Number(prompt("Digite um numero: "))
 let num2 = Number(prompt("Digite outro numero: "))
 let operador = prompt("digite +, - , x, /, e")
 
 console.log(calculadora(num1,num2,operador))