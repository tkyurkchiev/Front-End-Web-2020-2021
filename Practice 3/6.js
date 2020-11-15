const A = [10,5,13,18,51];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(A.reduce(reducer));