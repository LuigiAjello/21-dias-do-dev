let ArrayDeHoteis = []
let ArrayDeReservas = []
let idHotel = 1
let idReserva = 1
class Hotel {
    id 
    nome 
    categoria 
    endereco 
    telefone 
    constructor (idHotel, nome ,categoria, endereco,telefone){
        this.id = idHotel
        this.nome = nome
        this.categoria = categoria 
        this.endereco = endereco
        this.telefone = telefone
    }
}
class Reserva {
     idReserva
     idHotel 
     nomeResponsavel
     Diaentrada
     DiaSaida
    constructor( idReserva,idHotel ,nomeResponsavel,Diaentrada,DiaSaida){
    this.idReserva = idReserva
    this.idHotel =idHotel 
    this.nomeResponsavel = nomeResponsavel
    this.Diaentrada=Diaentrada
    this.DiaSaida = DiaSaida
    }
}
function CadastroHotel() {
    let nome =prompt("Nome do Hotel: ")
    let categoria =prompt("categoria do Hotel: ")
    let endereco = prompt("endereço do Hotel: ")
    let telefone= Number(prompt("Telefone do Hotel: "))
    let NovoHotel = new Hotel (idHotel, nome ,categoria, endereco,telefone)
    idHotel++ 
    ArrayDeHoteis.push(NovoHotel)
}
function CadastroReserva() {
    let idHotel  
    let existe = false
    do {
        idHotel = Number(prompt("Id do Hotel: "))
        for(let i = 0; i< ArrayDeHoteis.length;i++){
            if( idHotel == ArrayDeHoteis[i].id){
                i = ArrayDeHoteis.length
                existe = true 
            } else if (i == ArrayDeHoteis.length - 1)
               console.log("Id de hotel não cadastrado. "); 
        }
    } while (existe === false);
    let nomeResponsavel =prompt("nome do responsavel : ")
    let Diaentrada = Number(prompt("Dia de Entrada: "))
    let DiaSaida 
    do {
        DiaSaida= Number(prompt("Dia de saida: "))
        if(DiaSaida < Diaentrada)
            console.log("Dia de saida maior que o de entrada ");
    } while (DiaSaida < Diaentrada);
    let NovaReserva = new Reserva (idReserva,idHotel ,nomeResponsavel,Diaentrada,DiaSaida)
    idReserva ++
    ArrayDeReservas.push(NovaReserva)
}
function exibeReservaID() {
    let idReserva = Number(prompt("Digite o ID da reserva:"));
    let reservaEncontrada = ArrayDeReservas.find(reserva => reserva.id === idReserva);
    if(reservaEncontrada.length > 0) {
        console.log("Detalhes da Reserva:");
        console.log("ID da Reserva:", reservaEncontrada.id);
        console.log("ID do Hotel:", reservaEncontrada.idHotel);
        console.log("Nome do Responsável:", reservaEncontrada.nomeResponsavel);
        console.log("Dia de Entrada:", reservaEncontrada.Diaentrada);
        console.log("Dia de Saída:", reservaEncontrada.DiaSaida);
    } else {
        console.log("Reserva não encontrada para o ID:", idReserva);
    }
}
function NomeReservas() {
    
let NomeRes = prompt('Digite o nome da reserva ')
let reservasEncontradas = ArrayDeReservas.filter(reservas => reservas.nomeResponsavel=== NomeRes)
if (reservasEncontradas)
    console.log("Reservas encontradas para o responsável:", NomeRes)
reservasEncontradas.forEach(reserva => {
    console.log("RESERVA:");
    console.log("ID da Reserva:",reserva.id);
    console.log("ID do Hotel:",reserva.idHotel);
    console.log("Nome do Responsável:",reserva.nomeResponsavel);
    console.log("Dia de Entrada:",reserva.Diaentrada);
    console.log("Dia de Saída:",reserva.DiaSaida);
    console.log("#################################");
})
}
function CategoriasHoteis() {
    
    let cathotel= prompt('Digite a categoria de hotel :  ')
    let Hotelencontrados  = ArrayDeHoteis.filter(hotel => hotel.categoria=== cathotel)
    if (Hotelencontrados)
        console.log("Categorias de hoteis ", cathotel)
    Hotelencontrados.forEach(hotel => {
        console.log("Nome: ", hotel.nome);
        console.log("ID do Hotel: ",hotel.id);
        console.log("telefone :",hotel.telefone );
        console.log("Endereço :", hotel.endereco);
        console.log("#################################");
        
    })
    }
function MudarTelefone(idHotel,telefone) {
ArrayDeHoteis[idHotel -1].telefone = telefone
console.log 