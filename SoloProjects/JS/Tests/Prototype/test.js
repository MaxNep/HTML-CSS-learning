const animal = {
    speak () {
        console.log('Я животное');
    }
};


const bird = Object.create(animal);
bird.speak = function() {
  console.log("Я птица!");
};
bird.speak();

const dog = Object.create(animal);

dog.speak();



const vehicle = {
    move () {
        console.log('Я еду')
    } 
}

const car = Object.create(vehicle)
const elecCar = Object.create(vehicle)

elecCar.move();
car.move(); 


const plane = {
    fly () {
        console.log('Я лечу')
    }
}

const jet = {
    destionation () {
        console.log('Летим в Махачкалу')
    }
}
Object.setPrototypeOf(jet, plane);

jet.fly();
jet.destionation(); */


const people = {

};
Object.getPrototypeOf(people).greet = function (){
    console.log('Привет');  
}
people.greet();

class animal {
    eat = function() {
        console.log('Я ем')
    }
}

class Dog extends animal {}
const dog = new Dog();
Object.getPrototypeOf(dog).bark = function() {
    console.log('Гав гав')
}

dog.eat();
dog.bark();


/* Множественное наследование через прототипы.

Создай два объекта: swimmer с методом swim() и flyer с методом fly().
Создай объект duck, который может и плавать, и летать (свяжи его с обоими объектами).
Построй цепочку из прототипов.

Создай цепочку: grandparent → parent → child.
Добавь методы на каждом уровне и проверь, что child имеет доступ ко всем методам.
Игра с прототипами.

Создай простую игру, где есть базовый объект Player с методом move().
Создай наследников Mage и Warrior, которые добавляют свои методы castSpell() и attack() соответственно.
Проверь, что оба наследника могут использовать метод move(). */


const swimmer = {
    swim() {
        console.log('Я могу плавать');
    }
}

const flyer = {
    fly() {
        console.log('Я могу лететь')
    }
}

const duck = Object.create(swimmer, flyer);

duck.swim();
duck.fly();