

let me = {
    name: "Varun Jajara",
    age: 11,
    country: "USA",
    state: "California",
    city: "San Jose",
    school: "James Franklin Smith Elementary School",
    birthday: `December 31, 2021`
}

//Commented for now to avoid unnecessary duplication of console.log statements
//console.log(`${me.name} is ${me.age} and lives in ${me.city}, ${me.state}, ${me.country}. He studies at ${me.school}`)
me.age = me.age + 1
// Changed age property to past age property + 1
console.log(`${me.name} is about to be ${me.age} at ${me.birthday} and lives in ${me.city}, ${me.state}, ${me.country}. He studies at ${me.school}.`)
