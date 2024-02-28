//MOTORISTA
let NomeUsuario = prompt("Qual o seu nome?")
let IdadeUsuario = Number(prompt("Qual a sua idade?"))
let UsuarioPossuiCNH = prompt("Você possui CNH ?(S/N)")
let UsuarioPossuiCarro = prompt("Você possui carro?(S/N)")

if (IdadeUsuario < 18 || UsuarioPossuiCNH === "N" ) {
    console.log(NomeUsuario+ ", você não pode dirigir.")
}else if(IdadeUsuario >= 18 && UsuarioPossuiCNH === "S" && UsuarioPossuiCarro === "N")  {
    
    console.log(NomeUsuario+ ", você pode dirigir mas não tem um carro")

}else{

    console.log(NomeUsuario+ ", você será o motorista!")
}
