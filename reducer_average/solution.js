function find_average(array) {
    let reducer = arr => array.reduce((acc, cur) => acc + cur, 0) / array.length;
 return array.reduce(reducer);
}
}