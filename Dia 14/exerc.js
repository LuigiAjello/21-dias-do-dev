function aumentosalario (salario){
let aumento = 0
    if(salario <= 1500  ){
        aumento = 0.2
    }else if(salario >= 1501 && salario <= 2000){
        aumento = 0.15
    }else if(salario>= 2001 && salario <= 3000){
        aumento = 0.1
    }else if(salario < 0){
            console.log("Erro")
    }else{
        aumento = 0.05
    }
    return aumento 
    }
    function reajuste(){

    }
    function refazer (i) {
    a = prompt("Quer colocar mais um salario? S/N ")
        if(a === "S"){
        
            informacao()
        }else{
            alert("sistema fechado!Obrigado.")
        }
    
    }
function informacao(){
    let nomenafuncao= prompt("Qual o seu nome ?")
    let salarionafuncao= Number(prompt("Qual o seu salario ?"))
    let porcentagemdeaumento = aumentosalario(salarionafuncao)
    let Novosalario = salarionafuncao + (salarionafuncao * porcentagemdeaumento)
    console.log("Ola, "+nomenafuncao+" seu salario é: "+salarionafuncao+" a % de aumento foi: "+porcentagemdeaumento+ " o salario reajustado é: "+ Novosalario)
    refazer ()
    }
    informacao()