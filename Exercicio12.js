function encontrarElementoUnico(array) {
    let contagem = {};
    for (let i=0; i < array.length; i++) {
        let num = array[i];
        if (contagem[num]) {
            contagem[num]++;
        } else {
            contagem[num] = 1;
        }
    }
    for (let num in contagem) {
        if (contagem[num] === 1) {
            console.log("Elemento único:", num);
            return num;
        }
    }
}
let numeros = [];//Array dos números
encontrarElementoUnico(numeros);