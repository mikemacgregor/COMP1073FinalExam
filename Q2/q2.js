// JavaScript Document

// Person class with constructor that includes four instance variables, and two additional methods
class Person {
  constructor(name, age, gender, classes) { // required parameters to instantiate a new Person object
    this.name = name; // name not properly defined, changed to this.name = name
    this.age = age;
    this.gender = gender;
    // possible error; this line probably should be: this.interests = classes OR this.classes = classes
    this.interests = classes;
  }

  // greeting method for the Person object, message to console
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  // bye method for the Person object, message to console
  // we had a syntax error here with period after name, removed
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

// initiate new Person object called "parth" ... sets name, age, gender and array of interests/classes
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
// initiate new Person object called "harmanpreet" ... sets name, age, gender and array of interests/classes
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// Teacher class extends Person with the four instance variables,
// an additional "last" instance variable that is not used,
// and two more instance variables specific to Teacher - subject and grade
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) { // required parameters to instantiate a new Teacher object
    super(name, age, gender, interests); // these parameters are handled by the Person superclass constructor
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

// instantiate new Teacher object
let jessica = new Teacher('Jessica Gilfillan', 'Gilfillan', 22, 'female', ['JavaScript', 'CSS', 'Node.js'], 'COMP1073', 'A');
