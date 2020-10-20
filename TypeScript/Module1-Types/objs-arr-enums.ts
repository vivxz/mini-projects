// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // marks a tuple type –– an array w a length of 2 with number being the first element and a string being the second
// } = {
//   name: 'Vivian',
//   age: 25,
//   hobbies: ['TV', 'Sleeping', 'Eating'],
//   role: [2, 'cats']
// };

// const SWE = 0;
// const CONSULTANT = 1;

enum Role { SWE, CONSULTANT };

const person = {
  name: 'Vivian',
  age: 25,
  hobbies: ['TV', 'Sleeping', 'Eating'],
  role: Role.SWE
};

// Iterating through an array; hobby has a type of string
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map) !!! ERROR !!!
}

if (person.role === 0) {
  console.log('SOFTWARE ENGINEER')
}

console.log()