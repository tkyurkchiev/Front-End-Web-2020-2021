const A = [10,5,13,18,51];
let isLess=false;
A.forEach(function(index){
  if(index<10)isLess=true;
})
console.log(isLess);
isLess = false;
B.forEach(function(index){
  if(index<10)isLess=true;
})
console.log(isLess);