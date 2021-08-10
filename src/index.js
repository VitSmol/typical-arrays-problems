
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let min = Math.min.apply(null, array);
    return min;
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let max = Math.max.apply(null, array);
    return max;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let sum = 0;
    for (i in array) {
        sum += array[i];
    }
    return sum / array.length;
}
