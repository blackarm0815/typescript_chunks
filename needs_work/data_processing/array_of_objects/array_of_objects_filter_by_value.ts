var input =[
  {"name": "bob",
   "item": "apple"
  },
  {"name": "bob",
   "item": "banana"
  },
  {"name": "charlie",
   "item": "carrot"}
];

var output = input.filter(function(thing){return thing["name"] == "bob"});

console.log(input);
console.log(output)
