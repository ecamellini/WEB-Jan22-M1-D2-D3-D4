console.log("Number 1")
console.log("Number 2")
console.log("Number 3")
console.log("Number 4")
console.log("Number 5")
console.log("Number 6")
console.log("Number 7")
console.log("Number 8")
console.log("Number 9")

console.log("\n-----------------WHILE LOOP----------------")

let currentCount = 0
let maxNumber = 3

while (currentCount < maxNumber) {
    console.log("Number:", currentCount)
    currentCount++
}

console.log("Loop is over!")

console.log("\n-----------------DO LOOP----------------")

currentCount = 0
maxNumber = 3

do { // THIS IS ALWAYS EXECUTED THE FIRST TIME BECAUSE WE CHECK THE CONDITION AT THE END
    console.log("Number:", currentCount)
    currentCount++
} while (currentCount < maxNumber)

console.log("\n---------------FOR LOOP------------------")

// EXACTLY THE SAME AS THE FIRST WHILE
// currentCount++ will be executed at the end. AT THE END OF THE BLOCK REPEAT, TO LOOP.
for (currentCount = 0; currentCount <= maxNumber; currentCount++) {
    console.log("Number:", currentCount)
}

// We can also use a new variable
for (let count = 0; count <= 10; count++) {
    console.log("Number:", count)
}

console.log("\n---------------LOOP OVER ARRAYS------------------")

let animals = [
    'cat',
    'dog',
    'bird',
    'axolotl'
]

for (let index = 0; index < animals.length ; index++) {
    console.log(animals[index])
}

console.log("\n")

// Syntactic sugar: a nicer way to write it
// EXACTLY THE SAME, YOU JUST DON'T HAVE ACCESS TO THE INDEX
for (let animal of animals) { // It's "of", not "in", NEVER USE FOR-IN, USE FOR-OF
    console.log(animal)
}
