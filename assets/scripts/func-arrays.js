

//arrays
const user = {  name: "John", age: 30, city: "New York", sendMessage: function() {console.log("Hello " + this.name)}};

console.log(user);
console.log(user.name + " " + user.age + " " + user.city);
user.sendMessage();


//class User is a constructor function to create user objects
class User {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    sendMessage() {
        console.log("Hello " + this.name);
    }
}

const user2 = new User("Jane", 25, "Los Angeles");
console.log(user2);
console.log(user2.name + " " + user2.age + " " + user2.city);
user2.sendMessage();


// map() method is used to create a new array by applying a function to each element of the original array
// Function to transform an array of numbers into an array of objects with a property 'val'

function transformToObjects(testArray) {
    
    return testArray.map((item) => ({val : item}));
}

const nums = [1,2,3];
const x = transformToObjects(nums);
console.log(JSON.stringify(x,["val"],2));