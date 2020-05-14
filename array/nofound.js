array1 = [1, 2];

// false
if (found = array1.find(e => e === 3)) {
    console.log(true);
} else {
    console.log(false);
    console.log(found);
}

// true
if (found = array1.find(e => e === 2)) {
    console.log(found);
    console.log(true);
} else {
    console.log(false);
}