//Función para validar rango solicitado.
let numUsuario = () => {
    let num = parseInt(prompt("Ingrese un número entre 1 y 20:"));

    while (num < 1 || num > 20) {
        num = parseInt(prompt("Número fuera de rango.\nIngrese un número entre 1 y 20:"));
    }

    return num;
}

//Operaciones Matemáticas
let numValido = numUsuario();

    //Multiplicación
    for (let i = 1; i <= numValido; i++) {
    let multiplica = i * numValido;
    console.log(`${i} X ${numValido} = ${multiplica}`);
    }

    //Factorización
    for (let j = 1; j <= numValido; j++) {

         //Ciclo "for" anidado para obtener factorial.
        let res = 1;

        for (let k = 1; k <= j; k++) {
            res = res * k;
        }

        console.log(`Factorial de ${j} es : ${res}`);
    }
