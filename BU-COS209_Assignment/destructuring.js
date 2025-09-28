const rgb = [255, 200, 100];
const [r, g, b] = rgb;
console.log('r,g,b ->', r, g, b);

const [x, , z = 0] = [1]; 
console.log('x,z ->', x, z);

const student = {name: 'Emeka', age: 22, course: 'IT'};
const {name, course, major = 'mechatronics'} = student;
console.log('name,course,major ->', name, course, major);

function print({name, course}) {
  console.log(`${name} studies ${course}`);
}
print(student);
