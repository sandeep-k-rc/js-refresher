

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



//spread operator is used to expand an array into individual elements
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using spread operator to combine two arrays
const combinedArray = [...arr1, ...arr2];       
console.log("Combined Array:", combinedArray);

// Using spread operator to copy an array
const copiedArray = [...arr1];                  
console.log("Copied Array:", copiedArray);

// Using spread operator to pass array elements as function arguments
function sum(a, b, c) {
    return a + b + c;
}
const result = sum(...arr1);                    
console.log("Sum of arr1 elements:", result);

// Using spread operator to create a new object with properties from another object
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const combinedObject = { ...obj1, ...obj2 };  
console.log("Combined Object:", combinedObject);

// Using spread operator to clone an object
const clonedObject = { ...obj1 };              
console.log("Cloned Object:", clonedObject);

// Using spread operator to merge arrays and objects
const mergedArray = [...arr1, ...arr2, ...[7, 8, 9]];
console.log("Merged Array:", mergedArray);

const mergedObject = { ...obj1, ...obj2, a: 4, b: 5 };
console.log("Merged Object:", mergedObject);

// Using spread operator with nested arrays
const nestedArray = [[1, 2], [3, 4]];
const flattenedArray = [].concat(...nestedArray);
const flattenedArray1 = [...nestedArray].flat();
console.log("Flattened Array:", flattenedArray);
console.log("Flattened Array1:", flattenedArray1);

// Using spread operator with function arguments
function displayValues(...values) {
    console.log("Values:", values);
}
displayValues(...flattenedArray);

// Using spread operator with function parameters
function displayObject({ x, y, z }) {
    console.log("Object Values:", x, y, z);
}
displayObject({ ...obj1, ...obj2 });

// Using spread operator with arrays of objects
const arrayOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }];
const combinedFromObjects = arrayOfObjects.map(obj => ({ ...obj }));
console.log("Combined from Objects:", combinedFromObjects);

// Using spread operator with strings
const str = "Hello";
const strArray = [...str]; // Converts string to array of characters
console.log("String to Array:", strArray);

// Using spread operator with Set
const set = new Set([1, 2, 3]);
const setArray = [...set]; // Converts Set to array
console.log("Set to Array:", setArray);

// Using spread operator with Map
const map = new Map([["a", 1], ["b", 2]]);
const mapArray = [...map]; // Converts Map to array of key-value pairs
console.log("Map to Array:", mapArray);     