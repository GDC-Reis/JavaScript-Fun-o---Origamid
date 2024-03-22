function areaQuadrado(lado){
    return lado * lado;
}

function pi(){
    return 3.14;
}

//peso e altura são parâmetros da função
function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

function corFavorita(cor){
    if(cor === 'azul' || cor === 'Azul'){
        console.log("Eu gosto do céu");
    }else if(cor === 'verde' || 'verde'){
        console.log("Eu gosto de mato");
    }else{
        console.log("Não tenho cor favorita :| ");
    }
}

console.log(areaQuadrado(2));
console.log(pi());

console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos
console.log(parseInt(imc(60, 1.70))); // 60 e 1.70 são argumentos

// ========================== IMPORTANTE ==============================

//Argumentos podem ser funções
//Chamadas de Callback, geralemente são funções que ocorrem após algum evento
addEventListener('click', function() {
    console.log('Clicou');
})

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

/*
//Outra forma de ser usada

function mostraConsole(){
    console.log("Clicou")
}

addEventListener('click', mostraConsole);
 */

// ================================================================

function terceiraIdade(idade){
    if(typeof idade !== 'number'){  
        return alert("Informe sua idade !")
    }else if(idade >= 60){
        return true;
    }else{
        return false;
    }
}

console.log(terceiraIdade(60));

/*

// A variavel totalPaises só pode ser acessada dentro da função.

function paisesNaoVisitados(paisesVisitados){
    let totalPaises = 193;

    return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

let totalPaises = 193;
function paisesNaoVisitados(paisesVisitados){
    return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

// Dessa forma a variavel totalPaises pode ser acessada dentro e fora da função,
// porque ela passa a ser uma variavel de escopo global.

*/

function paisesNaoVisitados(paisesVisitados){
    let totalPaises = 193;

    return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

let profissao = 'Desenvolvedor';

function dados(){
    let nome = 'Gustavo';
    let idade = 22;
    function outrosDados(){  // Só é possivel acessar dentro da função dados
        var endereco = 'São Paulo';
        var idade = 23;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados();
}

console.log(dados());
// console.log(outrosDados());

// CRIE UMA FUNÇÃO PARA VERIFICAR SE O VALOR É TRUE
function verificaTrue(dado){
    return !!dado
}

//      EXERCICIOS

// CRIE UMA FUNÇÃO MATEMÁTICA QUE RETORNA O PRERIMETRO DE UM QUADRADO
// LEMBRANDO: PERIMETRO É A SOMA DOS QUATRO LADOS DO QUADRADO 

function perimetroQuadrado(lado){
    return lado * 4;
}

console.log(perimetroQuadrado(10,20,30,40));


// CRIE UMA FUNÇÃO QUE RETORN O SEU NOME COMPLETO
// ELA DEVE VERIFICAR OS PARÂMETROS: NOME E SOBRENOME

function verificaNome(nome, sobrenome){
    if(nome && sobrenome){
        return `${nome} ${sobrenome}` ;
    }else{
        return 'Digite seu nome e sobrenome'
    }
}

// CRIE UMA FUNÇLÃO QUE VERIFICA SE UM NUMERO É PAR
function verificaPar(number){
    let modulo = numero % 2;
    if(modulo !== 0){
        return true
    }else{
        return false;
    }
}


// CRIE UMA FUNÇÃO QUE RETORNE O TIPO DE DADO DO ARGUMENTO PASSADO NELA (TYPEOF)
function retornaTipo(dado){
    return typeof dado
}

// addEventListener é uma funçãom nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo é o Callback
// utilize essa função para mostrar no console o seu nome completo
//quando o eveneto 'scroll' ocorrer
addEventListener('scroll', function () {
    console.log('Gustavo');  
})

// CORRIJA O ERRO ABAIXO
let totalPaises = 193;
function precisoVisitar(paisesVisitados){
    // let totalPaises = 193;
    return `Ainda não visitei ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));

// *** AVISO ***
// Ao utilizar função dentro de outra função a função pai não podera usar 'return'.