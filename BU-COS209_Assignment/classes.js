class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static species() {
    return 'Homo sapiens';
  }
}

class Student extends Person {
  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }

  getProfile() {
    return `${this.fullName()} — ${this.course}`;
  }
}

const s = new Student('Brian', 'Njoku', 'Software Engineering');
console.log(s.getProfile()); 
console.log(Person.species()); 
