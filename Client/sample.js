const arr =[1,2,3,4,5,6]

const newarr1 = arr.splice(4,2)
const newarr2 = arr.slice(2).map((num)=>num)

console.log(arr);
console.log(newarr1);
console.log(newarr2);