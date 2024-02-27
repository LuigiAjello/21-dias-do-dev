let NomeUsuario = prompt("QUAL O SEU NOME?")
let IdadeUsuario = Number(prompt("QUAL A SUA IDADE?"))
let AlturaUsuario = Number(prompt("QUAL A SUA ALTURA?")) 
let PesoUsuario = Number(prompt("QUAL O SEU PESO?"))
let resultadoNascimento = (2024 - IdadeUsuario)
let resultadoIMC = (PesoUsuario / (AlturaUsuario * AlturaUsuario))
console.log ("Olá " + NomeUsuario +", você tem "+ IdadeUsuario +" anos, nasceu em "+resultadoNascimento+", tem "+AlturaUsuario+" de altura, pesa "+PesoUsuario+"kg e seu IMC é "+resultadoIMC+"Kg/m2")
//teste 