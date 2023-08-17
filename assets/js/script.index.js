/*
let personSimple = "John Doe";

const personObject = new Object();
personObject.firstName = "John";
personObject.lastNamem = "Doe";
personObject.age = 50;
personObject.eyeColor = "blue";

personObject.age = 10;

console.log(personSimple);
console.log(personObject);
*/

/*
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    } 

    introduce(){
        console.log(`olá, meu nome é ${this.name} e eu tenho ${this.age}`)
    }
}

const user1 = new User("soso", 10);
user1.introduce();
*/
/*
class Pizza{
    constructor(base, sauce, toppings,cheese){
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription(){
        return `delicious pizzaa with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings and a lots of ${this.cheese}`;
    }

    getTimerBase(){
        if(this.base == `traditional`){
            return 10;
        }else if(this.base == `integral`){
            return 15;
        }else{
            return `this base does not exist`
        }
    }

    getTimerSauce(){
        if(this.sauce == `tomato`){
            return 10;
        }else if(this.sauce == `pezzo`){
            return 15;
        }else{ 
            return `this base does not exist`
        }
    }

    getTimerToppings(){
        if(this.toppings == `olive`){
            return 10;
        }else if(this.toppings == `tomato`){
            return 15;
        }else{ 
            return `this toppings does not exist`
        }
    }

    getTimerCheese(){
        if(this.cheese == `catupiry`){
            return 10;
        }else if(this.cheese == `cheedar`){
            return 15;
        }else{ 
            return `this cheese does not exist`
        }
    }
}

const myPizza = new Pizza(`traditional`, `tomato`, `olive`, `cheedar`);
console.log(myPizza.getDescription());
console.log('time to cook the base = ' + myPizza.getTimerBase());
console.log('time to cook the sauce = ' + myPizza.getTimerSauce());
console.log('time to cook the cheese = ' + myPizza.getTimerCheese());

let timePizza = myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getTimerCheese();
console.log('total time to cook the pizza = ' + timePizza);
*/

/*
class Calculator{
    add(a, b){
        return a + b;
    }

    multiply(a, b){
        return a + b;
    }

    subtract(a, b){
        return a - b;
    }
}

const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("sum:", sumResult);

const multiplicationResult = calculator.multiply(4, 2);
console.log("multiplication:", multiplicationResult);

const subtractionResult = calculator.subtract(10, 4);
console.log("subtraction:", subtractionResult);
*/

/*
class Witch{
    constructor(name, patron, house, colorEye){
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEye = colorEye;
    }

    getName(){
        return `o nome do bruxo(a) é: ${this.name}`;
    }
    getHouse(){
        return `ele(a) está na casa ${this.house}`;
    }
    getPatron(){
        return `seu patrono é: ${this.patron}`;
    }
}

const witch1 = new Witch('harry potter', 'deer', 'grynffindor', 'green');
console.log(witch1.getName());

class TypeWitch extends Witch{
    constructor(name, patron, house, colorEye, TypeWitch){
        super(name, patron, house, colorEye);
        this.TypeWitch = TypeWitch;
    }

    getTypeWitch(){
        if(this.TypeWitch == 'p'){
           return "este bruxo é sangue puro";
        }else if(this.TypeWitch == 'm'){
           return "este bruxo é mestiço";
        }else{
            return "este bruxo é um trouxa";
        }
        }
    }

    const harry = new TypeWitch('harry potter', 'cervo', 'grifinoria', 'verde', 'm');
    console.log(harry.getTypeWitch());
    */

    /*
    class CamaraSecreta {
        constructor(name, pwd){
            this.name = name;
            let _pwd = pwd; //atributo privado _

            //metodo privado
            this.verifyPwd = (pwdInput) => {
             return pwdInput == _pwd; //true or false
            };

            this.accessChamber = () => {
                let pwdInput = prompt("digite sua senha");
                if(this.verifyPwd(pwdInput)){
                    console.log(`bem vindo a camara secreta ${this.name}`)
                }else{
                    console.log(`acesso negado trouxa`)
                }
            };
        }
        // metodo publico
        showName(){
            console.log(`oi ${this.name}`)
        }

    }
    //metodo privado
    const myAccess1 = new CamaraSecreta(`harry potter`, `senha123`);

    //metodo publico
    myAccess1.showName(); // bom

    myAccess1.name = 'hp'; // funciona pois é publico

    myAccess1.accessChamber(); // nao funciona pois e privado
*/

//forEach
/*
const companies = ["apple", "google", "facebook"];

companies.forEach(company => {
    console.log(`hey, ${company}!`);
});
*/

/*
const names = ["whinds", "freeway", "teste", "maria"];

names.forEach((name) =>{
    console.log(`hi, ${name}!`);
});
*/

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number, index) => {
    if(number % 2 == 0){
        console.log(number);
    }
});
*/

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number, index) => {
    if(number % 2 == 0){
        console.log(`o número ${number} está na posição ${index}`);
    }
});
*/

/*
const cars = [
    {
        marca: "ford",
        modelo: "focus",
    },
    {
        marca: "BMW",
        modelo: "BMW Z4",
    },
    {
        marca: "fiat",
        modelo: "palio"
    },
    {
        marca: "audi",
        modelo: "R8",
    },
];

cars.forEach((car) => {
    console.log(`marca: ${car.marca}
    modelo: ${car.modelo}`);
});
*/

class Cars{
    constructor(marca, modelo){
       this.marca = marca;
        this.modelo = modelo;
    }
}

class CarsList{
    constructor(){
        this.car = [];
    }

    addCars(car){
        this.car.push(car);
    }
}

const carlist = new CarsList();
    
function newCar(){
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;

    const carro = new Cars(marca, modelo); //instanciou

    carlist.addCars(carro); //colocou dentro do array

    carlist.car.forEach(car => {
        console.log(`marca: ${car.marca}
        modelo: ${car.modelo}`);
    })
}






