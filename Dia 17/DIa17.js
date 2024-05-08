let ArrayDeHoteis = []
let ArrayDeReservas = []
class Hotel {
    id 
    nome 
    categoria 
    endereco 
    telefone 
    constructor (id, nome ,categoria, endereco,telefone){
        this.id = id 
        this.nome = nome
        this.categoria = categoria 
        this.endereco = endereco
        this.telefone = telefone
    }
}
class Reserva {
     id 
     idHotel 
     nomeResponsavel
     Diaentrada
     DiaSaida
    constructor( id,idHotel ,nomeResponsavel,Diaentrada,DiaSaida){
    this.id = id
    this.idHotel =idHotel 
    this.nomeResponsavel = nomeResponsavel
    this.Diaentrada=Diaentrada
    this.DiaSaida = DiaSaida
    }
}
function CadastroHotel() {
    let id = Number(prompt("Id do Hotel: "))
    let nome =prompt("Nome do Hotel: ")
    let categoria =prompt("categoria do Hotel: ")
    let endereco = prompt("endereço do Hotel: ")
    let telefone= Number(prompt("Numero do Hotel: "))
    let NovoHotel = new Hotel (id, nome ,categoria, endereco,telefone)
    ArrayDeHoteis.push(NovoHotel)
}
function CadastroHotel() {
    let id = Number(prompt("Id do Hotel: "))
    let nome =prompt("Nome do Hotel: ")
    let categoria =prompt("categoria do Hotel: ")
    let endereco = prompt("endereço do Hotel: ")
    let telefone= Number(prompt("Numero do Hotel: "))
    let NovoHotel = new Hotel (id, nome ,categoria, endereco,telefone)
    ArrayDeHoteis.push(NovoHotel)
}
function CadastroReserva() {
    let id = Number(prompt("Id da reserva: "))
    let idHotel  = Number(prompt("Id do Hotel: "))
    let nomeResponsavel =prompt("endereço do Hotel: ")
    let Diaentrada = Number(prompt("Dia de Entrada: "))
    let DiaSaida = Number(prompt("Dia de saida: "))
}