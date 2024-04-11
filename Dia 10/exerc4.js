let numero 
contador = 0
let array = []
    numero = Number(prompt("Digite um numero: "))
   array = [numero - 1,numero]
     for(i=2;i<=10;i++){
         array [i] = array [i-1] + array[i-2]
         contador ++
        }
     console.log(array)
