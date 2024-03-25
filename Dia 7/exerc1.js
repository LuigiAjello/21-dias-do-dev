let mediageral= 0
let maiornota = 0 
let i  = 1 
let maiornotadohomem = 0 
let quantidadedemulhercomnota7 = 0
let quantidadedehomem = 0

while(i<= 10 ){
    let nota = Number(prompt("Digite a nota do "+ i +"aluno :"))
    let sexo = prompt("Digite H para homem e M para mulher")
       
    if(sexo === "M" && nota >= 7){
        quantidadedemulhercomnota7++ 
    }
        if(sexo === "H" ){
             quantidadedehomem++
            if (nota > maiornota) {
                maiornota = nota
            }
        }
        
            mediageral += nota 
            i++
    }
        mediageral = mediageral / 10
       
        console.log("A media geral entre os alunos é "+mediageral)
        console.log(quantidadedehomem + " homens enviaram as notas")
        console.log(quantidadedemulhercomnota7 + "mulhers tiraram nota = ou maior que 7")
        console.log(maiornota+ "Foi a maior nota entre os homens")