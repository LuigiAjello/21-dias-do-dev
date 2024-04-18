
class Computador {
        Tipo 
        Processador 
        Video 
        Armazenamento 
        MemoriaRam 
        Ssd
        constructor(Tipo,Processador,Video,Armazenamento,MemoriaRam,Ssd){
            this.Tipo = Tipo
            this.Processador = Processador
            this.Video = Video
            this.Armazenamento = Armazenamento
            this.MemoriaRam = MemoriaRam
            this.Ssd = Ssd
        }
            exibir(){
            console.log(`informacao do computador ${a}: `)
            console.log(`Tipo: ${this.Tipo}`)
            console.log(`Processador: ${this.Processador}`)
            console.log(`Video: ${this.Video}`)
            console.log(`Armazenamento: ${this.Armazenamento}`)
            console.log(`Memória RAM: ${this.MemoriaRam}`)
            console.log(`SSD: ${this.Ssd}`)
            }
}
let ArrayComputadores = []
let confirmacao1 = true 
let IndexDoComputador = 0
let a = 1 
arrayfacilitador = ["Tipo", "Processador", "Video", "Armazenamento", "MemoriaRam", "Ssd"]
while(confirmacao1){
let Tipo = prompt("Qual o tipo do seu computador? desktop ou notebook. ")
let Processador = prompt("Qual o processador do seu computador?.")
let Video = prompt("Qual a placa de video do seu computador? Integrado ou Dedicado.")
let Armazenamento = prompt("Qual o armazenamento do seu computador? Número em GB de memória.")
let MemoriaRam = prompt("Qual a memória RAM do seu computador? Número em GB de memória.")
let Ssd = prompt("Possui SSD? S/N")
if(Ssd === "S"){
    Ssd = true

}else{
    Ssd = false
}
//Faz um objeto com as informacoes. 
ArrayComputadores[IndexDoComputador] = new Computador (Tipo,Processador, Video, Armazenamento, MemoriaRam, Ssd)
let DesejaContinuar = prompt("Quer adicionar outro computador? S/N")
if (DesejaContinuar !== "S"){
    confirmacao1 = false
} else{
    IndexDoComputador++
}
}  
for(i = 0;i < ArrayComputadores.length;i++){
    ArrayComputadores[i].exibir();      
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    a++
}