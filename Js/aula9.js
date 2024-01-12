/* OBJETOS
Objetos são basicamente variaveis com muitos valores
dentro.

Ex: const carro = {marca:"Ford", modelo:"ka", ano: 2015}

os valores dentro de um objeto são chamados propriedades.

objetos também podem ter métodos. um Método é uma função
colocadas dentro de uma propriedade. */
const info = {primeiroNome:"Fernando"   , sobrenome:Brigida ,   Idade:26  , sexo:"Masculino ", buzinha: function() {alert("Biiiiiii")} ,

completo:function() {
    return "Meu Nome é :" + this.primeiroNome  +    "meu Sobrenome é: " +   this.sobrenome  +    

}  };