/*
PROGRAMMING KITCHEN

Today we will deal with variables, data-types, and conditionals.
*/

console.log(`Welcome to the "programming kitchen"!`)

console.log('\nWe set up our ingredients:')
// The backslash character is used to ignore the special effect of the subsequent character
console.log('Let\'s start with sugar, butter, and flour.')

/* MORE EXAMPLES ABOUT STRINGS:

What if you want to print a backslash?
console.log('\\')

Backticks allow you to represent strings on multiple lines:

console.log(`I want this string to
go on multiple lines`)
*/

// The user sent us those values from the browser, they are strings but we want numbers
let userInputForSugar = "80"
let userInputForButter = "120.5"

let sugar = parseInt(userInputForSugar)
let butter = parseFloat(userInputForButter)
let flour = 200

console.log("Sugar:", sugar)
console.log("Butter:", butter)
console.log("Flour:", flour)

let mediumBowl = sugar + butter

// flour = "200" // NEVER ASSIGN VALUES OF DIFFERENT TYPES TO THE SAME VARIABLE
// If you try this, you will get this result below: 200.5 + "200" = "200.5200"
// This is because with +, JS tries to convert everythin to string and concatenate...

// A nicer way to write: mediumBowl = mediumBowl + flour
mediumBowl += flour

console.log("\nThe content of the medium bowl containing all ingredients is:", mediumBowl)

console.log("Now the content is", mediumBowl)

let useVanilla = false

if (useVanilla) {
    let vanilla = 0.5
    mediumBowl += vanilla
    console.log("\nWe added vanilla! The final result is:", mediumBowl)
} else {
    console.log("\nI knew that you hated vanilla! We don't add it.")
}

console.log("\nLet's empty our medium bowl in the owen pan.")
mediumBowl = null
