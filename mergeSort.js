

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const midPoint = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, midPoint));
    const rightHalf = mergeSort(arr.slice(midPoint));
    return merge(leftHalf, rightHalf);
}


function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;


    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


