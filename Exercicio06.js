function Fibonacci(num) {
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else if (num > 1) {
        return Fibonacci(num - 1) + Fibonacci(num - 2);
    }
}
let num = parseInt(prompt("Digite o número de termos que deseja ver:"));
if (num == 0) {
    console.log(0);
} else if (num == 1) {
    console.log(1);
}
for (let i = 0; i < num; i++) {
    console.log(Fibonacci(i));
}