interface person {
	name: string;
	gender: string;
	age: number;
}

const people: Array<person> = [
	{
		name:'Sarah',
		gender:'female',
		age:25
	},
	{
		name:'Tom',
		gender:'male',
		age:18
	},
	{
		name:'Tim',
		gender:'male',
		age:65
	},
	{
		name:'Kim',
		gender:'female',
		age:58
	}
];
const average: number = people.reduce((total, next) => total + next.age, 0) / people.length;
console.log(average);
