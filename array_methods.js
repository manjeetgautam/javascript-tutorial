//*** CREATE AN ARRAY IN JS ************* */

let array = [1, 2, 3, 4, 5, 6,];

//An array can be collection of similar datatypes/ An array is collection of similar datattypes

let array2 = ['harry', 1, 1.2, null, true, {name: 'jack'}, [4,5,6], undefined, 100];

let array3 = [];
array3[0] = 'Apple';
array3[1] = 'Mango';
array3[2] = 'Banana';
array3[3] = 'Orange';

//******METHOD OF PRINTING AN ARRAY IN JS ******************** */

console.log("*First Method = ",array);

for(let i=0; i<array2.length; i++){
    console.log('array2:',i, ' = ', array2[i]);
}

console.log(array3[0]);
console.log(array3[1]);
console.log(array3[2]);
console.log(array3[3]);


//******* FIND INDEX OF BANANA IN ARRAY3 ********************* */

//if given element is present in array it will return the index of that element / otherwise it will return -1;
console.log('index of banana = ',array3.indexOf('Banana'));
console.log('index of Papaya = ',array3.indexOf('Papaya'));

// Check given element present or not in Array3. "Mango , Lichi"

console.log('Mango = ',array3.includes("Mango"));
console.log('Lichi = ',array3.includes("Lichi"));

console.log('Length of Array = ', array.length);
console.log('Length of Array2 = ', array2.length);
console.log('Length of Array3 = ', array3.length);



