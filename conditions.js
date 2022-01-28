console.log("\n-----------COMPARISON/EQUALITY OPERATORS-----------")

let height = 175
console.log("The height of the user is: ", height)

// Always use names formulated as QUESTIONS to name boolean variables
let isTallerThan170 = height > 170
console.log("Is the user taller than 170?", isTallerThan170)

let isShorterThan160 = height <= 159
console.log("Is the user shorter than 160?", isShorterThan160)

let isHeight165
// this is true... WE ARE MIXING DIFFERENT DATA-TYPES -- AND WE WANT TO AVOID THAT
isHeightLooselyEqualTo165 = height == 165
console.log("Is the height loosely equal to 165?", isHeightLooselyEqualTo165)

isHeightStrictlyEqualTo165 = height === 165 // WE ALWAYS WANT TO USE ===
console.log("Is the height strictly equal to 165?", isHeightStrictlyEqualTo165)

isHeightStrictlyDifferentFrom165 = height !== 165 // WE ALWAYS WANT TO USE !==
console.log("Is the height strictly different from 165?", isHeightStrictlyDifferentFrom165)

console.log("\n-----------AND/OR OPERATORS-----------")

let eyeColor = "green"


// A + B --> C
// A: number , B, C

// A === B  --> C
// A: anything, B: anything --> C: boolean
// Same for: !==, >, <, >=, <=


// OR: combines logical operators
// True in case at least one is true
let hasBlueEyes
hasBlueEyes =   "green"  ===   eyeColor // 2  +  3
let hasGreenEyes = eyeColor === "green"  // "green" === "green" ---> true
let hasGreyEyes = eyeColor === "grey" // "green" === "grey" ---> false

let hasClearEyes = hasGreyEyes || hasGreenEyes || hasGreyEyes
//                 false       || true         || false
// At least one is true and so the result will be true

console.log("Does they have clear eyes?", hasClearEyes)
console.log("Does they have dark eyes instead?", !hasClearEyes)


// AND: combines logical operators
// True only if all the operands are true, false if even just one is false
let maxHeight = 180
let minHeight = 170

let isHeightInTheRange = (height >= 170 ) && (height <= 180)
//                        175 >= 170      && 175 <= 180
//                        true            && true
// Both true and so the result will be true, false in case any one of them is false


// ------------------------------------------------------
// Complex combination of && and ||

// AND has precedence, just like multiplication/division in math operations (rule of Boolean Algebra)
// BUT we can use BRACKETS and always explicitly control the precedence
// ALWAYS put readability first
let hasClearEyesAndHeightInRange = ((eyeColor === "blue") || (eyeColor === "green") || (eyeColor === "grey")) && ((height >= 170) && (height <= 180))
//                                  (false                 || true                   || false               ) && (true            && true           )
//                                  It will result: true && true after solving the expressions between brackets
//                                  It will result: true
hasClearEyesAndHeightInRange = hasClearEyes && isHeightInTheRange // This is the same as the line above

console.log("Does the user have clear eyes and height between 170 and 180?", hasClearEyesAndHeightInRange)

// console.log("Example of difference caused by operator precedence:")
// let firstNumber = 1
// let secondNumber = 3
// let logicalOperation1 = secondNumber > 0 || firstNumber > 0 && secondNumber < 10
// let logicalOperation2 = secondNumber > 0 || (firstNumber > 0 && secondNumber < 10)
// let logicalOperation3 = (secondNumber > 0 || firstNumber > 0) secondNumber < 10 &&
// console.log(logicalOperation1, logicalOperation2, logicalOperation3)

console.log("\n----------------------IF STATEMENT--------------")

if (hasClearEyes) {
    console.log("The user has bright eyes.")
    console.log("The user doesn't have dark eyes.")
}

console.log("This line of code is outside the if-statement, always printed.")


let basePrice = 100
let discount = 20
let isDiscounted = true // It could be "Are we in holiday season or not?"

if (isDiscounted) {
    console.log("The price is discounted and it is:", basePrice - discount)
} else{
    console.log("The price is not discounted and it is:", basePrice)
}

// Or, we can use the if to detetmine what the final price (after discount or not) is and put it in a variable
let discountedPrice = basePrice - discount
let finalPrice

if (isDiscounted) {
    finalPrice = discountedPrice
} else {
    finalPrice = basePrice
}

/* TERNARY OPERATOR
This that follows is a more compact alternative, absolutely identical to the previous IF-ELSE example
It only applies when we want to give a SPECIFIC VALUE to a variable based on a condition

As the '+=' sign, all these language features that allow us to write code that is
easier to read and write, are called SYNTACTIC SUGAR

*/
finalPrice = isDiscounted ? discountedPrice : basePrice

console.log("The final price is", finalPrice)


console.log("\n----------TRUTHY AND FALSY VALUES------------")

let isMyConditionTrue = true
isMyConditionTrue = 0  // Test this with undefined, null, NaN, empty string, and other values and see what happens

if (isMyConditionTrue) { // In general, TRY TO AVOID THIS! Don't apply if on things that are not explicitly boolean
    console.log("I am truthy")
} else {
    console.log("I am falsy")
}

// Example, if we want to know if a variable is defined or not
let variable
if (variable) {
    // Truthy
    console.log("My variable has a value")
} else {
    // Falsy, it will be undefined/null or something
    // But this can lead to errors! For example, we would end up here also if
    // The variable contains 0, empty string, or NaN --> they are values!
    console.log("My variable does not have a value")
}

// The right way to do it is to BE EXPLICIT:
// EXPLICITLY DECLARE A BOOLEAN VARIABLE AND THE CONDITION THAT MAKES IT TRUE
// THEN USE THAT ONE IN THE IF

let isDefined = (variable !== undefined) && (variable !== null)
                // true                  && true

if (isDefined) {
    console.log("My variable has a value")
} else {
    console.log("My variable does not have a value")
}
