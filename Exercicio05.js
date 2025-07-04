let num=parseInt(prompt("Digite um número:"))
if (num % 3 == 0 && num % 5 == 0){
    console.log("fizzbuzz")
}
else{
    if (num % 3 == 0){
        console.log("fizz")
    }
    if (num % 5 == 0){
        console.log("buzz")
    }
}
