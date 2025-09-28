const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log('doubled ->', doubled);

function Timer() {
  this.seconds = 0;
  setInterval(() => { 
    this.seconds++;
  }, 1000);
}

const greet = (name = 'Guest') => `Hello, ${name}!`;
console.log(greet('Brian'));
