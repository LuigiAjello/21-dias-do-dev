let arraynomes= [] 
let arraynotas= []
let contador = 0 
let confirmacao = "S"
do{
        let nome = prompt("Digite o nome do aluno: ")
    arraynomes[contador] = nome
        let nota = Number(prompt("Digite a nota do aluno: "))
arraynotas[contador] = nota 
contador++
confirmacao = prompt("Digite S para mais uma nota e N para terminar: ")
if(confirmacao=== "N" ){
    break;
}else{ 
    continue
}

}while(contador)
for(let i=0;i < contador;i++){
    console.log(arraynomes[i]+" "+arraynotas[i])
}
function Calculadorasoma (arraynotas, contador,){
    let soma = 0
for(let i=0;i < contador ;i++){
    soma += arraynotas[i];
}
return soma 
}
console.log("A SOMA É: "+ Calculadorasoma(arraynotas,contador))
function mediadosalunos(arraynotas,contador){
let resposta = (Calculadorasoma(arraynotas,contador)/ contador)
return resposta
}
console.log(mediadosalunos(arraynotas, contador));