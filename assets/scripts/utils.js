
//const list = document.querySelector('ul');
//list.remove();

//for loop 
const hobbies = ['Sports', 'Cooking', 'Reading']
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

// for of loop
for (const hobby of hobbies) {
    console.log(hobby);
}

// for in loop
const person = {
    name: 'Sandeep',
    age: 30,
    city: 'New York'
};

for (const key in person) {
    console.log(key, person[key]);
}

// forEach loop
hobbies.forEach((hobby) => {
    console.log(hobby);
});

// while loop
let i = 0;
while (i < hobbies.length) {
    console.log(hobbies[i]);
    i++;
}

// do while loop
i = 0;
do {
    console.log(hobbies[i]);
    i++;
} while (i < hobbies.length);
