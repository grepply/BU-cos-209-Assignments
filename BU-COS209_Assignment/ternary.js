const score = 76;
const grade = score >= 90 ? 'A' :
              score >= 80 ? 'B' :
              score >= 70 ? 'C' :
              'F';
console.log('grade ->', grade);

const canVote = age => (age >= 18 ? 'Yes' : 'No');
console.log('canVote(20) ->', canVote(20));
