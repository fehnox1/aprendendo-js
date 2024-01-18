/* switch
é usado para realizar diferentes ações em diferentes condições
no mesmo bloco de verificação. caso a condição não seja compatível não será executada e o valor padrão será acionado.


function verificarCor()  {
    let cor = document.getElementById("cor").value; 
    cor = cor.toLowerCase();

    switch (cor) {

    case "azul" :   
    //oque acontece
        document.body.style.backgroundColor = "blue";
    break;
    case "vermelho" :
        //oque acontece
        document.body.style.backgroundColor = "red";
    break;
    case "verde" :
        //o que acontece
        document.body.style.backgroundColor = "green";
    break;
    default:
        document.getElementById("teste").innerHTML = "Nenhuma cor disponivel :" + cor
}
}
*/

function diaDaSemana    ()  {
   var dia = new Date().getDay();
   console.log(dia);

    switch (dia) {

    case 0:   
    //oque acontece
        document.getElementById("teste").innerHTML = "Hoje é Domingo!";
    break;
    case 1 :
        //oque acontece
        document.getElementById("teste").innerHTML = "Hoje é Segunda!";
    break;
    case 2:
        //o que acontece
        document.getElementById("teste").innerHTML = "Hoje é Terça!";
    break;
    case 3 :
        //o que acontece
        document.getElementById("teste").innerHTML = "Hoje é Quarta!";
    break;
    case 4:
        //o que acontece
        document.getElementById("teste").innerHTML = "Hoje é Quinta!";
    break;
    case 5:
        //o que acontece
        document.getElementById("teste").innerHTML= "Hoje é Sexta!";
    break;
    case 6 :
        //o que acontece
        document.getElementById("teste").innerHTML = "Hoje é Sabado!";
    break;
    default:
        document.getElementById("teste").innerHTML = "Não sei que dia é"
}
}