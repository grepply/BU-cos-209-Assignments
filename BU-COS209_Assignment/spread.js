const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log('b ->', b); 

const obj1 = {x: 1, y: 2};
const obj2 = {...obj1, z: 3};
console.log('obj2 ->', obj2);

function sum(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
console.log('sum ->', sum(1,2,3,4));
