const PI = 3.14159;

let counter = 0;
if (true) {
  let counter = 10; 
  console.log('inner counter:', counter); 
}
console.log('outer counter:', counter); 

counter = counter + 1;
console.log('counter after increment:', counter); 
