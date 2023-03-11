//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.values(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, 
has a printInfo method, 
and also has a method that increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, weight, height, age, counter) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.age = age;

        var x = 0;
        var counter = x; 
        this.printInfo = () => {console.log(`This person is named ${this.name}, is ${(this.age)} years old, and is ${this.height}ft tall and weights ${this.weight}lbs`);

        this.addAge = () => {
            this.age + counter++;
            console.log(`${this.name} is`, this.age + counter);}
}

}
            

// Person #1
let newPerson1 = new Person('John', 2000, 90.0, 20)
console.log(newPerson1.printInfo())
console.log(newPerson1.addAge())
console.log(newPerson1.addAge())


// Person #2
let newPerson2 = new Person('Mara', 110.0, 5.2, 33)
console.log(newPerson2.printInfo())
console.log(newPerson2.addAge())
console.log(newPerson2.addAge())
console.log(newPerson2.addAge())




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function BaseOfTestFunc(str, breaking_num) {
    return new Promise( (resolve, reject) => {
        if(str.length > breaking_num){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
BaseOfTestFunc('Feeed Me Seeemore',10)

.then ( (result) => {
        console.log(`Big Word ${result}`)
})
.catch ( (error) => {
        console.log(`Small  Number ${error}`)
})

