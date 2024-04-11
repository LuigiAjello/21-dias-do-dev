let array= []
let numeros 
let arrayinvertido = []
let numerosdoarray 
let numerosdenumero = Number(prompt("Digite o numero de arrays"))
 
 for  (i=0;i<numerosdenumero;i++){
    let numero = Number(prompt("Digite o " +(i+1) +" numero")) 

array [i] = numero  
 }
console.log("O array original  é "+ array)
contador = numerosdenumero - 1 
for (i=0;i<numerosdenumero;i++){
 arrayinvertido [i] = array[contador]
 contador-- 
}
console.log("O novo array é "+ arrayinvertido)