const users = [
  {id: 1, name: 'Ada', active: true, score: 90},
  {id: 2, name: 'Bayo', active: false, score: 72},
  {id: 3, name: 'Chiboy', active: true, score: 85},
];

users.forEach(u => console.log('user:', u.name));

const names = users.map(u => u.name);
console.log('names ->', names);

const activeUsers = users.filter(u => u.active);
console.log('active ->', activeUsers);

const ada = users.find(u => u.name === 'Ada');
console.log('found ->', ada);

const totalScore = users.reduce((acc, u) => acc + u.score, 0);
console.log('total score ->', totalScore);
