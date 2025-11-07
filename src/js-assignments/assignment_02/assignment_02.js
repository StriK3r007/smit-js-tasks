// task_01 | Create a Full Address
let userStreet = prompt('Enter the street you live in')
let userCity = prompt('Enter the city you live in')
let userCountry = prompt('Enter the country you live in')

alert(`Your full address is: ${userStreet}, ${userCity}, ${userCountry}`)
console.log(`Your full address is: ${userStreet}, ${userCity}, ${userCountry}`)

// task_02 | Custom Username
let firstName = prompt('Enter your first name')
let favoriteNumber = prompt('Enter your favorite number')

alert(`Your new username is: ${firstName+favoriteNumber}`)
console.log(`Your new username is: ${firstName+favoriteNumber}`)

// task_03 | Email Generator
let emailFirstName = prompt('Enter your first name')
let emailLastName = prompt('Enter your last name')

alert(`Email: ${emailFirstName}.${emailLastName}@gmail.com`)
console.log(`Email: ${emailFirstName}.${emailLastName}@gmail.com`)

// task_04 | Combine Favorite Things
let favoriteColor = prompt('Enter your favorite color')
let favoriteAnimal = prompt('Enter your favorite animal')
let favoriteFood = prompt('Enter your favorite food')

alert(`"Your favorite things are: ${favoriteColor} ${favoriteAnimal} and ${favoriteFood}!"`)
console.log(`"Your favorite things are: ${favoriteColor} ${favoriteAnimal} and ${favoriteFood}!"`)

// task_05 | Quote with Author
let quote = prompt("Enter your favorite quote:")
let authorName = prompt("Enter author name:")

alert(`"${quote}." - ${authorName}`)
console.log(`"${quote}." - ${authorName}`)