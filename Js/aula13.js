// iff e else   

/*var interruptor = "off";

if(interruptor == "on"){
        alert ("a lampada  está ligada");
} else {
    alert("a lampada está desligada!");
} */



// hora pro site!
var hora = new Date().getHours();

if (hora < 12){
    alert("Bom dia!");

} else if (hora < 18) {
    alert("Boa tarde!");
    
} else {

    alert("Boa noite!");
}


function verificar() {
         let nome = document.getElementById("nome").value;
 
         if (nome =="" || nome == null){
    let p = document.getElementById("teste");
   p.innerHTML = "O Campo não pode está vazio";
   p.style.color = "red";
         }  else {


            let p = document.getElementById("teste");
            p.innerHTML = "Tudo certo!";
            p.style.color = "Blue";
            
         }


}

