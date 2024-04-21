class Carro {
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao         
    }           
    
    SegundosParaPercorrer(distancia) {
        return distancia / (this.VelocidadeMaxima / this.Aceleracao)
    }
}

class Corrida {
    constructor(Nome, Tipo, distancia) {
        this.Nome = Nome
        this.Tipo = Tipo 
        this.Distancia = distancia 
        this.Participantes = []
        this.Vencedor = ""
    }

    DefinirVencedor() {
        let tempos = []
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
corrida.Participantes[0] = new Carro("Ferrari", 120, 160, 5)
corrida.Participantes[1] = new Carro("Mercedes", 110, 150, 3)
corrida.Participantes[2] = new Carro("Ferrari", 105, 145, 2)

corrida.DefinirVencedor()
