
//Destructuring arrays
const testArray = [1, 2, 3, 4, 5];  

console.log("Original Array:", testArray);

let one = testArray[0];
let two = testArray[1];
let three = testArray[2];
let four = testArray[3];
let five = testArray[4];

// Destructuring assignment
let [first, second, third, fourth, fifth] = testArray; 

console.log("Destructured Values:");
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);
console.log("Fourth:", fourth);
console.log("Fifth:", fifth);


// Destructuring objects
const user = {  
    name: "John",
    age: 30,
    city: "New York",
    sendMessage() {
        console.log("Hello " + this.name);
    }
}; 

//without destructuring
console.log("User Name:", user.name);
console.log("User Age:", user.age);
console.log("User City:", user.city);
user.sendMessage();

//with destructuring
const { name : userName, age: userAge, city: userCity, sendMessage } = {  
    name: "John",
    age: 30,
    city: "New York",
    sendMessage() {
        console.log("Hello " + this.name);
    }
}; 

console.log("Destructured User Name:", userName);
console.log("Destructured User Age:", userAge);
console.log("Destructured User City:", userCity);

const userInstance = { name: userName, userAge, userCity, sendMessage };
console.log("Destructured User Instance:", userInstance);

userInstance.sendMessage(); // Call the method using destructured variable


// Destructuring with nested objects
const nestedUser = {  
    name: "Alice",
    age: 28,
    address: {
        city: "Los Angeles",
        state: "CA"
    }
};

// Destructuring nested object
const { name: nestedUserName, address: { city: nestedUserCity, state: nestedUserState } } = nestedUser;

console.log("Nested User Name:", nestedUserName);
console.log("Nested User City:", nestedUserCity);
console.log("Nested User State:", nestedUserState);

// Destructuring with function parameters
function displayUserInfo({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
displayUserInfo(user); // Pass the user object to the function

// Destructuring with function parameters and default values
function displayUserInfoWithDefaults({ name = "Unknown", age = 0, city = "Unknown" } = {}) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
displayUserInfoWithDefaults(); // Call the function without arguments

/*
function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}*/
function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
storeOrder({id: 123, currency: 'USD'}); // Call the function with an object

// Destructuring with default values
const { name: userNameWithDefault = "Unknown", age: userAgeWithDefault = 0 } = user;
console.log("User Name with Default:", userNameWithDefault);
console.log("User Age with Default:", userAgeWithDefault);