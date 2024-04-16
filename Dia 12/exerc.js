//variaveis e arrays declaradas
arraynomes= []
arraysenhas= []
let respostaum 
let i = 0
let nomelogin 
let senhalogin 
let confirmacao = true
let nomeexcluir = 0
let indiceexcluir= -1 

//funcao que encontra o indice que quer com base em um array 
function encontrarindice(nome){
    for(let m =0 ;m < i ;m++){
        if(arraynomes[m] === nome ){
            return m;
        }
    }
    return -1; //nao existe array de indice negativo 
}
    //loop while - faz a pergunta ate que seja encerrado 
        while(confirmacao){
respostaum = Number(prompt("Escolha 1 para cadastrar, 2 para fazer login, 3 para excluir um cadastro e 4 para encerrar"))
//switch com as perguntas para o login  
switch (respostaum) {
    //cadastro , adiciona em um array nome e senha em array diferentes.
    case  1 :
        arraynomes[i]= prompt("Digite seu nome : ")
        arraysenhas[i]= prompt("Digite sua senha : ")
        i++
        break;
    //login, compara por meio da estrutura FOR se a senha e o nome estao no array 
    case 2 : 
        nomelogin  = prompt("Digite seu nome : ")
        senhalogin = prompt("Digite sua senha : ")
        let loginSucesso = false;
       for(let j=0;j<i;j++){
        if(nomelogin === arraynomes[j] && senhalogin === arraysenhas[j]){
            alert("Login bem-sucedido!")
            confirmacao = false
            loginSucesso = true;
            break;
        }
    } 
     if (!loginSucesso) {
        alert("Nome de usuário ou senha incorretos.");
    }
       break
    //elimina algum login e senha do array e tira o espaco vazio entre os restantes; utilizando a funcao de encontrar indice 
    case 3: 
        nomeexcluir = prompt("Digite o nome de usuario a ser excluido") ;
        indiceexcluir = encontrarindice(nomeexcluir)
        if(indiceexcluir !==-1 ){
            for(let o = indiceexcluir;o< i -1;o++){
            arraynomes[o] = arraynomes[o+1]
            arraysenhas[o] = arraysenhas[o+1]
            }
            arraynomes[i - 1] = "";
            arraysenhas[i - 1] = "";
            i--
            console.log("cadastro excluido com sucesso !")
        }else{
            console.log("Nome de usuario nao encontrado ")
        }

break;
    // Termina o login, termina o loop. 
    case 4:           
        confirmacao = false
            break;
//tela de erro caso clicar em uma tecla nao "usavel"    
        default:
    alert("Erro")
       break;
}
}