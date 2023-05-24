// Exercise 1
const myList = [5, 2, 3];

const swap = ([a, b, c]) => [c, b, a];

console.log(swap(myList));

// Exercise 2
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({ name, brand, year });

// Exercise 3
const greet = (name, msg = 'Hi') => `${msg} ${name}`;

// Exercise 4
const student01 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
}

const student02 = {
  name: `Vitor`,
  age: 20,
}

const getLastName = (objStudent) => {
  const { lastName = `lastName inexistente` } = objStudent;
  return lastName;
}

// Exercise 5
const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

const [ student1, [ student2, student3 ], [student4, student5 ] ] = moreStudents;

console.log(student1, student2, student3, student4, student5);
