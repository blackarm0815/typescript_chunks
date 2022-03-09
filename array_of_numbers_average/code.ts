interface Person {
  name: string;
  gender: string;
  age: number;
}

const people: Array<Person> = [
  {
    name:'Sarah',
    gender:'female',
    age:25,
  },
  {
    name:'Tom',
    gender:'male',
    age:18,
  },
  {
    name:'Tim',
    gender:'male',
    age:65,
  },
  {
    name:'Kim',
    gender:'female',
    age:58,
  },
];
const average: number = people.reduce((total, next) => total + next.age, 0) / people.length;
const preElement: HTMLElement | null = document.getElementById('output');
if (preElement !== null) {
  preElement.innerText = JSON.stringify(people, null, 2);
  preElement.innerText += '\n\n';
  preElement.innerText += `average = ${average.toString()}`;

}
