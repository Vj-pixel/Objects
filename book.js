let myBook = {
    title: "Joe's Adventure",
    author: "Varun Jajara",
    publisher: "Scholastic",
    pageCount: 234,
    genre: "Adventure"
}

// All information about the book. Print it here.
console.log(`${myBook.title} by ${myBook.author}`)
console.log(`The genre of ${myBook.title} is ${myBook.genre}`)

myBook.title = "Hello, World!"
myBook.genre = "Educational"

// Changed title property to "Hello, World!"
// Changed genre property to "Educational"
console.log(`The genre of ${myBook.title} is ${myBook.genre}`)
