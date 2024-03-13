const arr = [1, 2, 3, 5, 6, 7];
let consistent = true; 

if (arr.length > 1) {
    const difference = arr[1] - arr[0]; 
    
    for (let i = 2; i < arr.length; i++) { 
        if (arr[i] - arr[i - 1] !== difference) {
            consistent = false;
            break; 
        }
    }
}

if (consistent) {
    console.log("The array is consistent.");
} else {
    console.log("The array is not consistent.");
}
