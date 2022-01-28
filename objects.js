console.log("\n------------------DEFININING OBJECTS----------------")

let emptyObject = {} // Empty object
console.log("Empty object here:", emptyObject)

// Let's define a more meaningful object: let's model a student
/* Our model of a student is:
{
    name,
    surname,
    age,
    hasWebcam
}
It is represented by the properties */

let student = { // This is a value that complies to our model
    firstName: "John",
    lastName: "Doe",
    age: 42,
    hasWebcam: true
}

// This is a different value, but still a student, still adheres to our model
let student2 = {  firstName: "Mario", lastName: "Rossi", age: 33, hasWebcam: false }

console.log("\nThis is a student:")
console.log(student)


console.log("\nThis is another student:")
console.log(student2)

console.log("\n------------------ACCESSING OBJECT PROPERTIES----------------")
// We use the dot to access values by key
// Just write the dot, and VSCode will show properties/keys and with the arrows you will be able to select one
console.log("The name of the first student is", student.firstName,"and the last name is", student.lastName)

console.log(`
The name of the first student is ${student.firstName},
The surname is: ${ student.lastName }
`)

console.log("\n------------------MODIFY/EDIT/UPDATE OJECT PROPERTIES----------------")

console.log("\nOur student broke the webcam, and so we must update the data:")
student.hasWebcam = false
console.log(student)

console.log("\nOne year has passed:")
// student.age = student.age + 1
student.age += 1 // A nicer way to write it
// student.age++ // Another way to write EXACTLY the same thing
console.log(student)


console.log("\nTwo more year have passed:")
// student.age += 2 // Adds 2
// Another way to write it
student.age++ // This adds 1
student.age++ // This adds 1
// student.age-- if instead I want to remove 1
console.log(student)


console.log("\n------------------CREATE A NEW PROPERTY----------------")

console.log("Track the Discord username...")
student.discordUsername = "student#123123"
console.log(student)

console.log("\n------------------DELETE A PROPERTY----------------")

console.log("No actually we didn't need the Discord username...")
delete student.discordUsername
console.log(student)

/* ANOTHER WAY TO DEAL WITH OBJECT PROPERTIES
let age = student['age']
console.log(age)

student['age'] = 50
student['discordUsername'] = "stud12321232"
console.log(student)

// MAIN DIFFERENCES
// What I write in the square brackets is a string, so I can do whatever I can do with strings
// Like using a space
student["Email Address"] = "john@example.com"
// student.Email Address This wouldn't work
console.log(student)

// let newProperty = "Another property"
// student[newProperty] = "New value"
// console.log(student)
*/

console.log("\n------------------USING OBJECTS AS DICTIONARIES----------------")

// A dictionary is a set of values/definitions for a set of keys/words

// A dictionary to define/describe various fruits
let fruitDictionary = {
    apple: 'A red/green fruit loved by Snow White',
    orange: 'A round, orange, fruit typical of the Mediterranean',
    coconut: 'Fruit with a hard shell, found in tropical regions'
}

console.log(fruitDictionary)

// A set of tasks I have to do
let tasks = {
    cleanTheKitchen: 'I have to clean the kitcken because tomorrow I will have guests',
    buyBread: 'Because tomorrow I have a dinner'
}

let newTask = 'changeLightbulb'
let description = "It's broken, it's dark in the room"

'thisIsAstring'
tasks[newTask] = description // This adds a property called 'changeLightbulb'
// tasks['newTask'] = description // this is different! This adds a property called 'newTask'
console.log(tasks)

// This is actually the difference between the two approaches, dot notation and square brackets
// Try to uncomment the following lines and see what happens...
// tasks.newTask = description
// console.log(tasks)

console.log("\n------------------NESTING OBJECTS----------------")
let address = {
    city: "Milan",
    country: "Italy",
    street: "Via 1232 asdasd"
}

student.address = address
// student['address'] = address  EXACTLY THE SAME AS THE LINE ABOVE
console.log(student)

console.log(`The address of the student is:
City -- ${ student.address.city  }
Street --  ${ student.address.street }
`)

// EXACTLY THE SAME - DONE IN TWO MORE WAYS
// student.address['city']
// student['address']['city']

let moreTasks = {
    cleanTheKitchen: {
        description: "I must clean the kitchen because it sucks.",
        isCompleted: false
    },
    changeLightBulb: {
        description: "I cannot see anything.",
        isCompleted: true
    }
}

console.log(moreTasks)

console.log("\n------------------COPYING OBJECTS----------------")

// WHAT HAPPENS IF WE DO THIS
let firstNumber = 42
let secondNumber
console.log('First number', firstNumber, 'Second number:', secondNumber)
console.log('Assign the value of firstNumber to the second one, because I want to copy the value of the number, and then we increase the second one by 1.')
secondNumber = firstNumber
secondNumber++
console.log('First number', firstNumber, 'Second number:', secondNumber)

console.log('\nWe do the same with objects...')
let firstObject = {
    number: 42
}

let secondObject = undefined
console.log('First', firstObject, 'Second:', secondObject)
console.log('Assign the value of firstObject to the secondObject, because I want to copy the entire object, and then we increase it property number by 1.')
secondObject = firstObject
secondObject.number++
console.log('First', firstObject, 'Second:', secondObject)
// YOU ARE NOT COPYING THE OBJECT, YOU ARE JUST COPYING A REFERENCE TO IT
// IT'S LIKE HAVING A LINK TO THE OBJECT, SO YOU COPY THE LINK, BUT THE OBJECT TO WHICH WE LINK IS THE SAME

// THERE IS A WAY TO COPY AN OBJECT
let anotherObject = {}
Object.assign(anotherObject, firstObject) // If you want to copy objects, don't use =, use Object.assign
// REMEMBER TO START WITH AN EMPTY OBJECT WHERE TO COPY THE ONE YOU WANT TO COPY
anotherObject.number++
console.log('First', firstObject, 'Second:', anotherObject)

console.log("\nLet's try to copy a student...")
// EXAMPLE WITH STUDENTS - same age (twins), same last name, etc.
// But different name
let brotherOfStudent = student
brotherOfStudent.firstName = "Paul"
console.log("Student:",student)
console.log("Brother:",brotherOfStudent)
// This is an error, a bug
// Let's fix it back
student.firstName = "John" // Let's go back to john...

console.log("\nLet's try again")
brotherOfStudent = {}
Object.assign(brotherOfStudent, student)
brotherOfStudent.firstName = "Paul"
console.log("Student:",student)
console.log("Brother:",brotherOfStudent)

// THIS DOES NOT COPY NESTED OBJECTS
// If we do the following, we will change it in both...
// Maybe it's what we want to happen, maybe not. It depends.
// brotherOfStudent.address.city = "Rome"

// IF WE WANT TO MAKE THE TWO ADDRESSES DIFFERENT WE NEED TO DO IT MANUALLY
// In this case, we also need to...
brotherOfStudent.address = {}
Object.assign(brotherOfStudent.address, student.address)
// There is no better way to do it, with what we know now...
// BE CAREFUL WHEN YOU NEST OBJECTS...
brotherOfStudent.address.city = "Rome"
console.log("Student:",student)
console.log("Brother:",brotherOfStudent)
