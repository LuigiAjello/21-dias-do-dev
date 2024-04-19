//corrida!!! 
class Carro {
    Nome 
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(Nome,Potencia,VelocidadeMaxima,Aceleracao ){
            this.Nome = Nome
            this.Potencia = Potencia
            this.VelocidadeMaxima = VelocidadeMaxima
            this.Aceleracao= Aceleracao         
        }           
            SegundosParaPercorrer(){
            //let Distancia = Number(prompt("Escreva em metros as"))
            let Resultado = Distancia/(this.VelocidadeMaxima/this.Aceleracao)
            return Resultado
            }
    }
class Corrida{
    Nome
    Tipo
    Distancia 
    Participantes
    Vencedor 
constructor(Nome,Tipo,Distancia,Participantes,Vencedor ){
        this.Nome = Nome
        this.Tipo = Tipo 
        this.Distancia = Distancia 
        this.Participantes = Participantes
        this.Vencedor = Vencedor
    }
}
let IndexDosCarros= 0 
let IndexDasdcorridas = 0  
let ConfirmacaodoWhile= true
let ArrayCarros= []
let ArrayCorridas =[]
while(ConfirmacaodoWhile){
let Nome = prompt("Qual o nome da equipe? ")
let Potencia= Number(prompt("Qual a potencia do carro?"))
let VelocidadeMaxima=Number(prompt("Qual a velocidade maxima do carro ?"))
let Aceleracao =Number(prompt("Qual a aceleração do carro?"))
let confirmacao1 = prompt("Quer adicionar outro carro? S/N ")
    ArrayCarros[IndexDosCarros] = new Carro (Nome,Potencia,VelocidadeMaxima,Aceleracao)
    if(confirmacao1 === "S"){
        IndexDosCarros++
    }else{
let Nome = Number(prompt("Qual o local da corrida?"))
let Tipo = Number(prompt("Qual tipo de corrida?"))
let Distancia= Number(prompt("Qual a distancia da corrida?"))
//let Participantes = Number(prompt(""))
//let Vencedor = Number(prompt("")
    }
     }   
