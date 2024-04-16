
arraynomes= []
arraysenhas= []
let respostaum 
let i = 0
let nomelogin 
let senhalogin 
confirmacao = true

while(confirmacao){
respostaum = Number(prompt("Escolha 1 para cadastrar, 2 para fazer login, 3 para excluir um cadastro e 4 para encerrar"))
switch (respostaum) {
    case  1 :
        arraynomes[i]= prompt("Digite seu nome : ")
        arraysenhas[i]= prompt("Digite sua senha : ")
        i++
        break;
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
    case 3: 
    nomelogin  = prompt("Digite seu nome : ")
    senhalogin = prompt("Digite sua senha : ")
     eliminarSucesso = false;
   for(let l=0;l<i;l++){
    if(nomelogin === arraynomes[l] && senhalogin === arraysenhas[l]){
       arraynomes [l] = 0 
       arraysenhas [l] = 0
        confirmacao = false
        eliminarSucessoSucesso = true;
        break;
    }
} 
 if (!eliminarSucessoSucesso) {
    alert("erro ao eliminar");
}

        break;
    case 4: 
           
        confirmacao = false
            break;
    default:
    alert("Erro")
       break;
}
}
