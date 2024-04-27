let nomesCadastrados = []
let senhasCadastrados = []
let comnfirmacao = true
function Desejo () {
    escolha = Number(prompt("Escreva 1 para cadastrar, 2 para login e 3 para excluir login e 4 para encerrar programa"))
    return escolha
}

function cadastro (nomecadastrado, senhacadastrado){
let nome = (prompt("Nome para cadastro :"))
let senha = (prompt("Senha para cadastro :"))
    
    if(nomesCadastrados.includes(nome)===false && senhasCadastrados.includes(senha)=== false){
    nomecadastrado.push(nome)
    senhacadastrado.push(senha)
    }else{
        alert("nome ou senha ja existe")
    }
}

function login (nomesCadastrados,senhasCadastrados){
    let nome  
    let senha
    nome = (prompt("Nome"))
    if(nomesCadastrados.includes(nome)===true){
        senha = (prompt("Senha"))
        if(senhasCadastrados.includes(senha)===true){
            return true
            
        }else if (senhasCadastrados.includes(senha)===false)
        return false
    }else {
        return false
    }
}

function excluir(nomesCadastrados,senhasCadastrados) {
    let nome 
    let index 
    nome = (prompt("Nome"))
     if(nomesCadastrados.includes(nome)===true){
       index = nomesCadastrados.indexOf(nome)
        nomesCadastrados.splice(index,1)
        senhasCadastrados.splice(index,1)
     }else 
     alert("Não existe esse login")
    }

while (comnfirmacao) {
    switch (Desejo()) {
        case 1:
            cadastro(nomesCadastrados, senhasCadastrados);
            break;
        case 2:
            let a = login(nomesCadastrados, senhasCadastrados);
            if (a) {
                alert("Login efetuado");
                comnfirmacao = false;
            } else {
                alert("Erro, nome ou senha errada!");
                continue
            }
            break;
        case 3:
        excluir(nomesCadastrados,senhasCadastrados)
            break;
        case 4:
            comnfirmacao = false
            break;
        default:
            alert("Escolha inválida!");
            break;
    }
}

