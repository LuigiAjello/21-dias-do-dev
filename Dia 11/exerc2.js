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
for (let i = 0; i < contador - 1; i++) {
    for (let j = 0; j < contador - i - 1; j++) {
        
        if (arrayvalores[j] > arrayvalores[j + 1]) {
            [arrayvalores[j], arrayvalores[j + 1]] = [arrayvalores[j + 1], arrayvalores[j]];
            [arraymodelos[j], arraymodelos[j + 1]] = [arraymodelos[j + 1], arraymodelos[j]];
            [arrayanos[j], arrayanos[j + 1]] = [arrayanos[j + 1], arrayanos[j]];
        }
    }
}
for (let i = 0; i < contador; i++) {
    console.log("CARRO " + (i + 1) + ": Modelo - " + arraymodelos[i] + ", Valor - " + arrayvalores[i] + ", Ano - " + arrayanos[i]);

}                                                                                               