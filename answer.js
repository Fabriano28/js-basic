// object
// soal 1
const person = {
    name: "John",
    age: 25,
    job: "Developer",
    greet: function () {
        console.log("Hi, my name is John")
    }
}

// soal 2
console.log(person.name);
console.log(person["job"]);

// soal 3
person.hobby = "Reading";

// soal 4
person.age = 30;

// soal 5
delete person.job;

// soal 6
const student = {
    name: "Alice",
    grade: 90,
    address: {
        city: "Jakarta",
        country: "Indonesia"
    }
}

console.log(student.address.city);


// soal 7
person.greet();

// alt soal 7
person.greet = function () {
    return `Hi, my name is ${this.name}`;
}

console.log(person.greet());

// array
// soal 1
let fruits = ["Apple", "Banana", "Orange"];

// soal 2
console.log(fruits[0]);
console.log(fruits[2]);