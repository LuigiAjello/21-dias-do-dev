let fome = prompt("Você está com fome? Se sim Digite 'S' se não Digite 'N' ") //Usar let ou const????
let dinheiro = prompt("Você tem dinheiro? Se sim Digite 'S' se não Digite 'N'")
let restauranteAbertura = prompt("O restaurante está aberto? Se sim Digite 'S' se não Digite 'N'")
if(fome === "N" ||dinheiro === "N"){ 
 console.log("Hoje a janta será em casa");
}else if (fome === "S" && dinheiro === "S" && restauranteAbertura === "Fechado") {
    console.log("Peça um delivery!")
}else{
console.log("Hoje o jantar será no seu restaurante preferido!")
}
