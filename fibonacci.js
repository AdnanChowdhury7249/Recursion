
function fibs(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            array.push(i)
        } else {
            array.push(array[i - 1] + array[i - 2])
        }
    }
    console.log(array);
}

function fibsRecursive(n) {

    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [1];

    } else if (n === 2) {
        return [0, 1];
    } else {
        let sequence = fibsRecursive(n - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
        return sequence
    }

}

