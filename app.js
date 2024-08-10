//let titulo = document.querySelector('h1')
//titulo.innerHTML= "Olá, vadia!"

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = "Não seja cis! Escolha um número"

//
let listaSorteados = [];
let tentativas = 1;
let numeroSecreto = aleatorio();

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function frasesIniciais() {
    exibirTextoTela('h1', 'Olá, vadia');
    exibirTextoTela('p', 'Não seja cis! Escolha um número');
    }


function aleatorio(){
    if(listaSorteados.length>=3){
        listaSorteados = [];
    }
   let numeroEscolhido = parseInt(Math.random()*10+1);
 if(listaSorteados.includes(numeroEscolhido)){
    return aleatorio();
 }else{
    listaSorteados.push(numeroEscolhido);
    console.log(listaSorteados)
    return numeroEscolhido
 }

 }


 

 function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';
 }
 
  frasesIniciais() 


function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto){
        exibirTextoTela('h1','Você acertou o número');
        let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';   
        let mensagemTentativas = `Você conseguiu com ${tentativas} ${palavraTentativa}!`;
        exibirTextoTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
         }else
            tentativas++;  {
                  if (chute>numeroSecreto){
            exibirTextoTela('p',"Você é burra? número secreto é menor")
            }
            else 
            if (chute<numeroSecreto){
            exibirTextoTela('p',"Deixa de ser Cis! número secreto é maior")
            }
            limparCampo()
        }
    }

    function reiniciar(){
        numeroSecreto = aleatorio();
        limparCampo();  
        frasesIniciais();
        tentativas = 1;
    }
console.log(numeroSecreto)
       

