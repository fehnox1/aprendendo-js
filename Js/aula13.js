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