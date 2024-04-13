let arraymodelos = []
let arrayanos = []
let arrayvalores = [] 
confirmacao = "S"
contador = 0 

while(confirmacao){
arraymodelos[contador] =prompt("Qual o modelo do carro ?")
arrayanos[contador] = Number(prompt("Qual o Ano do carro ?"))
arrayvalores[contador] = Number(prompt("Qual o valor ?"))
contador++ 
confirmacao  = prompt("Quer enviar mais um veiculo?")
if(confirmacao === "S"){
    continue;
}else {
    break;
}
}
for(i = 0 ;i < contador ;i++){
    console.log("CARRO"+(i+1)+"= Modelo: "+arraymodelos[i]+"; Valor: "+arrayvalores[i]+"; ano : "+ arrayanos[i]);
}
for(i = 0 ;i < contador ;i++){
 
}




