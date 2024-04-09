
let nome;
let idade;
let salario;
let confirmacao; 

do {
    confirmacao = "S"; 
    nome = prompt("Digite seu nome: ");
    idade = Number(prompt("Digite sua idade: "));
    salario = Number(prompt("Digite seu salario: "));
    console.log(nome, idade, salario);
    confirmacao = prompt("Você errou algo? S/N ");
} while(confirmacao === "S");

if(confirmacao === "N") {
    console.log(nome, idade, salario);
}


let aumento = 0.015;
ano = 2024;
for (i=1;i<11;i++){
    ano +=1;
    salario += salario + salario*aumento
    aumento *=2
    console.log (" ano "+ ano+ " : " + salario )
}
