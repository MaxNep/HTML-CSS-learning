function createGreeting(name) {
    return function() {
        console.log('Hello, ${name}!')
    }
}


const greetJohn = createGreeting('John');
greetJohn(); // "Hello, John!"
