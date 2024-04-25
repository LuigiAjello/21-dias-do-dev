let ArrayA = [13, 20, 17, 22, 24, 20, 27, 17, 19, 14];
let ArrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

function NumEmComum(array1, array2) {
    let ArrayComRepetidos = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                ArrayComRepetidos.push(array1[i]);
                break;
            }
        }
    }

    let ArrayFinal = ArrayComRepetidos.filter((element, index) => ArrayComRepetidos.indexOf(element) === index);

    return ArrayFinal;
}

console.log(NumEmComum(ArrayA, ArrayB));
