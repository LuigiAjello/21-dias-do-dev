class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade 
    constructor(Titulo, Autor, Editora, AnoPublicacao){
        this.Titulo = Titulo
        this.Autor = Autor
        this.Editora= Editora
        this.AnoPublicacao = AnoPublicacao
        this.Disponibilidade = true 
    }
}
class Biblioteca {
Nome
Endereco 
Telefone 
AcervoDeLivros = []   
constructor(Nome,Endereco,Telefone,AcervoDeLivros){
this.Nome = Nome
this.Endereco= Endereco
this.Telefone = Telefone
this.AcervoDeLivros = AcervoDeLivros
    }
     Buscar_Nome_Livro(NomeDoLivro) {
        this.AcervoDeLivros.forEach(livro=>{
            if (livro.Titulo== NomeDoLivro) {
                
            }

        })
    }
}
let arraydelivros= []
function Cadastrar_Livro () {
    let Titulo = prompt("Digite o título do livro:  ")
    let Autor =prompt("Digite o autor do livro ")
    let Editora = prompt("Digite a editora do livro ")
    let AnoPublicacao = prompt("Digite o ano de publicacao:  ")
    arraydelivros.push(new Livro(Titulo, Autor, Editora, AnoPublicacao));
}
let confirmacao = true 
while (confirmacao) {
let pergunta =prompt("Digite 1 para outro livro e 2 para encerrar ")
    switch (pergunta) {
        case "1":
            Cadastrar_Livro()
            break;
        case "2":
            confirmacao = false
            break;
        default:
            alert("ERRO")
            break;
    }
}

