var input =[
  {"name": "bob",
   "age": 30
  },
  {"name": "bob",
   "age": 24
  },
  {"name": "charlie",
   "age": 16
  }
]
var output = input.reduce((total, next) => total + next.age, 0);

console.log(input);
console.log(output);