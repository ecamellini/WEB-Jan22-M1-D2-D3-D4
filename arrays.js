console.log("---------------ARRAYS---------------")

// Array of strings
let animals = [
    'cat',
    'dog',
    'bird',
    'axolotl'
]

// Array of numbers
let fibonacci = [ 1, 1, 2, 3, 5, 8 ]

console.log(animals)
console.log(fibonacci)

// Mixed array
// NEVER MIX TYPES IN THE SAME VARIABLE
// let string = "hello"
// NEVER PUT ANOTHER TYPE IN THIS VARIABLE
// IN ARRAYS, WE WANT ONLY VALUES OF THE TYPE
let arrayOfALotOfThings = [ // You can do this -- because JS is crazy - please don't
    'apple',
    1232,
    true,
    'car'
] //

console.log("\n---------------FIND OUT THE LENGTH---------------")

console.log("The length of the animals array is:", animals.length)

console.log("\n---------------ACCESS THE ELEMENTS---------------")

// With an object we would write the name, inside the square braces
// Think about the array as an object that has values with no name...
// So we must use their position, their index, to access them
let firstElement = animals[0] // WE ALWAYS START COUNTING FROM ZERO
console.log("First animal:", firstElement)
console.log("Second animal:", animals[1])

console.log("\nArray of objects:")
// A shipment has: source, destination, weight
let arrayOfShipments = [
    { source: "Milan", destination: "Rome", weight: 12 },
    { source: "New York", destination: "Glasgow", weight: 50 },
]

console.log(arrayOfShipments)
console.log("The source of the first shipment is:", arrayOfShipments[0].source)

console.log("\n---------------CONCATENATION---------------")

let moreAnimals = ['monkey', 'giraffe']
animals = animals.concat(moreAnimals)
console.log(animals)

let manyNumbers = fibonacci.concat([2,4,5,6], [23, 5, 544])
console.log(manyNumbers)

console.log("\n---------------PUSHING/ADDING AN ELEMENT TO THE END OF THE ARRAY---------------")
animals.push('parrot') // THIS IS NOT AN ARRAY, IT's A SINGLE ELEMENT
console.log("We added a parrot", animals)

console.log("\n---------------REMOVE WHE LAST ITEM OF THE ARRAY-------------------------------")
let parrot = animals.pop()
console.log("We removed the last item", animals)
console.log("Here is is!", parrot)

console.log("\n---------------FINDING THE INDEX OF AN ELEMENT-------------------------------")
console.log("The index of 'bird' is:", animals.indexOf('bird'))

console.log("\n---------------INSERTING AN ITEM-------------------------------")
// We want to insert a 'crocodile' at the position number 3
// We use splice, 3 parameters:
// 1. The position where we want to operate, on the array
// 2. The number of items that we want to remove
// 3. The items that we want to insert
animals.splice(3, 0, 'crocodile')
console.log("We added crocodile in position 3:", animals)

animals.splice(4, 2, 'parrot', 'whale')
console.log("We removed axolotl and monkey, and we replaced them with parrot and whale:\n", animals)

console.log("\n---------------ARRAYS-------------------------------")

// USEFUL TO REPRESENT MATRIXES / TABLES
let arrayOfArrays = [
    [1, 2, 3],
    [4, 6, 7],
    [1, 4, 0]
]

console.log(arrayOfArrays)
console.log("Second item of the second row:", arrayOfArrays[1][1])
console.log("Third item of the first row:", arrayOfArrays[0][2])
