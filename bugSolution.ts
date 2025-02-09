function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    throw new Error('Both parameters must be numbers.');
  }
}

let result1 = addSafe(1, 2); // Correct usage
let result2 = addSafe("1", 2); // Throws an error
let result3 = addSafe(1, "2"); // Throws an error

console.log(result1); // Output: 3
//console.log(result2); // Throws an error
//console.log(result3); // Throws an error