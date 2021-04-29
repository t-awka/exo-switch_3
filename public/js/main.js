let vari = prompt("donne une valeur");
let variaB = vari%2;
switch (variaB){
    case 0:
        alert("Le nombre est un multiple de 2");
        break;
    case 1:
        alert("Le nombre n'est pas un multiple de 2");
        break;
    default:
        alert("Ceci n'est pas un nombre");
        break;
}