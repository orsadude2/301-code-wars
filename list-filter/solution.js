function filter_list(l) {
    let integers = l.filter(intonly => intonly === parseInt(intonly))
    return integers;
 // let integers = l.filter(intOnly => intOnly !== '')
 // return integers;
 // want to try another solution with regex
 }