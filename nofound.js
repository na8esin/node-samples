array1 = [1, 2];

// false
if (array1.find(e => e === 3)) {
    console.log(true);
} else {
    console.log(false);
}

// true
if (array1.find(e => e === 2)) {
    console.log(true);
} else {
    console.log(false);
}