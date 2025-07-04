let a=parseInt(prompt("Digite um valor para A:"))
let b=parseInt(prompt("Digite um valor para B:"))
let c=parseInt(prompt("Digite um valor para C:"))
let delta=(b ** 2) - 4 * (a * c);
let raiz1= (-b + Math.sqrt(delta)) / (2 * a)
let raiz2= (-b - Math.sqrt(delta)) / (2 * a)
if (delta > 0){
    console.log("Raiz 1 = " +raiz1)
    console.log("Raiz 2 = " +raiz2)
}
else if (delta == 0){
    console.log("Única Raiz = " +raiz1)
}
else if (delta < 0){
    console.log("A equação não possui raízes reais")
}


