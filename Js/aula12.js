
const pessoa = ["Fernando", "Emanoel", 30];
pessoa.push("qualquer coisa");
//remove o primeiro item. (remove todos os indices ou seja, os números restados.)

pessoa.shift();

pessoa.unshift("Fernando Gostosão")

//Fusão de matrizes.
const lista1 = ["Feijão",   "Arroz",    "Farinha",  "Açaí"];
const lista2 = ["Mortadela",    "Frango",   "Charque",  "Ovo"];
const lista3 = ["Macarrão",    "Salsicha",   "Esteque",  "Franguinho assado"];

const superlista = lista1.concat(lista2, lista3);

// - ----

const jogadores = [
    "Biro Biro",   
    "Ribamar",
    "Pelé", 
    "Maradorã",  
    "Neymar", 
    "Cristiano", 
    "Messi", 
    "Vampeta", 
    "Dimitri"     ]

const craques = jogadores.slice();

// -- deixar em ordem alfabetica
const jogOrdem = jogadores.sort();

// -- deixar "desalfabetica"
const desafalbetica = jogadores.reverse();
// ---


//deixando em ordem em caso de números.
//numeros.sort(function(a,b){return a - b});
//



//maior Numero
function MaiorNumero (array){
    return Math.max.apply(null,array);
}
//menor Numero
function    MenorNumero (array){
    return  Math.min.apply(null,array);
}
//filtragem (números maiores que 20 por exemplo)

const numeros = [40, 100, 1, 5, 25, 10];

const maior20 = numeros .   filter  (filtragem);

function filtragem(value, index, array) {
    return value > 20;
}

document.getElementById("teste").innerHTML = maior20;