function sayHello(name) {
    console.log(`Привет ${name}!`)
}

console.log(sayHello('Максим'));


function add(a,b) {
    return a + b;
}

console.log(add(1,3));

function getLength(string) {
    return string.length;
}

console.log(getLength('Hello'));


function sayHello(name = 'гость') {
    return(`Привет ${name}!`)
}
console.log(sayHello( ));
console.log(sayHello('Максим'));



function power(a,b) {
    return a ** b;
}

console.log(power(2,3));


