// filtering
const kissBand = [
    {
        name: 'Paul',
        age: 77,
        role: 'singer'
    },
    {
        name: 'Gene',
        age: 79,
        role: 'bass'
    },
    {
        name: 'Ace',
        age: 73,
        role: 'Lead-guitar'
    },
    {
        name: 'Peter',
        age: 98,
        role: 'drums'
    }
];

const oldPlayers = kissBand.filter(member => member.age >= 77);
console.log(oldPlayers)





//forEaching

const letters = ['a', 'b', 'c', 'c', 'c','d', 'd']
let count = {};
letters.forEach(item => {
   count[item] = count[item] ? count[item] + 1 : 1
});

console.log(count)


//mapping 
const numbers = [1, 2, 3, 4, 5];

const numberDouble = numbers.map(double);

function double(value) {
    return value * 2;
}
 console.log(numberDouble)
