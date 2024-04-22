class Carro {
    Nome 
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(nome,potencia,velocidadeMaxima,aceleracao ){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao= aceleracao         
    }           
    SegundosParaPercorrer(distancia){
        let Resultado = distancia/(this.VelocidadeMaxima/this.Aceleracao)            
        return Resultado
    }
}
class Corrida {
    constructor(Nome, Tipo, distancia) {
        this.Nome = Nome;
        this.Tipo = Tipo; 
        this.Distancia = distancia; 
        this.Participantes = [];
        this.Vencedor = ""; // Alterado para armazenar o objeto do carro vencedor
    }

    DefinirVencedor() {
        let tempos = [];
        for (let i = 0; i < this.Participantes.length; i++) {
            let tempo = this.Participantes[i].SegundosParaPercorrer(this.Distancia)
            tempos[i] = {carro: this.Participantes[i], tempo: tempo}
        }
        tempos.sort((a, b) => a.tempo - b.tempo)
        this.Vencedor = tempos[0].carro.Nome
        console.log("O vencedor é:", this.Vencedor)
    }
}

let corrida = new Corrida("Monaco", "F1", 60000 )
corrida.Participante[0]= new Carro ("ferrari",120,160,5)
corrida.Participante[1]= new Carro ("Mercedes",110,150,3)
corrida.Participante[2]= new Carro ("ferrari",105,145,2)
let medias=[]
for(let i = 0;i<corrida.Participante.length;i++){
    medias[i] = corrida.Participante[i].SegundosParaPercorrer(corrida.Distancia);
}
corrida.DefinirVencedor()