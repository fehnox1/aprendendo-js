/*Funções  é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor.


- primeiro jeito de fazer ! function
function soma(valor1, valor2, valor3){
    return valor1 + valor2; 
}

document.getElementById("texto").innerHTML  = soma(10, 500);
- segundo jeito 
function soma (valor1, valor2, valor3){
    return valor1 + valor2
}

var total = soma(10, 23);

alert(total)
- Terceiro Jeito simples sem variaveis.
function realParaDolar( real    , cotacaoDolar  ){
     return real *cotacaoDolar;
}
var ovalordoDolar = realParaDolar(4, 4.85);

alert (ovalordoDolar)

- quarto jeito com variaveis 
function cotacaoDolar(valor1,valor2){
    return (valor1, valor2)
}

var valor1 = 1;
var valor2 = 4.85;
var total = valor1 * valor2;

document.getElementById('texto').innerHTML = cotacaoDolar(valor1, valor2);
alert("o Valor Real que você tem é: R$:"    +   valor1 + " Transformado em Dólar, o valor é: U$: " + valor2);*/
//*Chmando Por botão!!! 
function alertaHello(){
    alert("Olá Bandidos!        ");

}

/*Chamar sem precisar de nada> */
alertaHello();  