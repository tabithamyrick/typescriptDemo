//variables

let a: number = 10;
var b: number = 20;
const c: number = 30;

//basic calculatons
let sum: number = a + b;
let sub: number = a - b;
let mul: number = a * b;
let div: number = a / b;
let mod: number = a % b;
"help" == "help";
1 == 1
1 != 2
1 > 2
1 < 2
1 >= 2
1 <= 2
1 === 1
1 !== 2
true && true

failedLoginAttempts: number = 0;
if (failedLoginAttempts > 3) {
    console.log("You are blocked");
}else if(failedLoginAttempts > 2){
    console.log("You are about to be blocked");
    
} else {
    
}
else{
    failedLoginAttempts++;
    console.log("You are not blocked");
}

//functions

function add(a: number, b: number): number {
    return (a + b);
}

let awnser: number = add(10, 20);
awnser++;
awnser--;

//data types
let num: number = 10;
let str: string = "Hello";
let bool: boolean = true;
let nul: null = null;
let undef: undefined = undefined;
let arr: number[] = [1, 2, 3];
let stringArr: string[] = ["Hello", "World"];
let newArray: number[] = [];
newArray.push(1);
let arr2: Array<number> = [1, 2, 3];
let tuple: [string, number] = ["Hello", 10];
let obj: object = { name: "John", age: 30 };
let obj2: { name: string, age: number } = { name: "John", age: 30 };
let any: any = "Hello";
let any2: any = 10;
let any3: any = true;

class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

let person: Person = new Person("John", 30);
let person2: Person = {name: "James", age: 31};
let person3: Person = {name: "Jenny", age: 29};

let personList: Set<Person> = new Set<Person>();
personList.add(person);
personList.add(person2);
personList.add(person3);

for(let person of personList){
    console.log(person.name);
}

personList.forEach((person) => {
    console.log(person.name);
});

//day one Homework
//Scurm Guide
//https://www.atlassian.com/agile/scrum
//https://www.scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf


function fizzBuzz(n: number): string[] {
    let stringArray: string[] = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            stringArray.push("FizzBuzz");
        }else if(i % 3 == 0){
            stringArray.push("Fizz");
        }else if(i % 5 == 0){
            stringArray.push("Buzz");
        }else{
            stringArray.push(i.toString());
        }
    }
    return stringArray;
};

function fizzBuzz2(n: number): string[] {
    let stringArray: string[] = [];
    for(let i = 1; i <= n; i++){
        let str: string = "";
        if(i % 3 == 0){
            str += "Fizz";
        }
        if(i % 5 == 0){
            str += "Buzz";
        }
        if(str == ""){
            str = i.toString();
        }
        stringArray.push(str);
    }
    return stringArray;
};

function fizzBuzz3(n: number): string[] {
    let stringArray: string[] = [];
    for(let i = 1; i <= n; i++){
        let str: string = "";
        if(i % 3 == 0){
            str += "Fizz";
        }
        if(i % 5 == 0){
            str += "Buzz";
        }
        stringArray.push(str || i.toString()); 
    }
    return stringArray;
};

function fizzBuzz4(n: number): string[] {
    let stringArray: string[] = [];
    let i = 1;
    while(i <= n){
        let str: string = "";
        if(i % 3 == 0){
            str += "Fizz";
        }
        if(i % 5 == 0){
            str += "Buzz";
        }
        stringArray.push(str || i.toString());
        i++;
    }
    return stringArray;
};

function fizzBuzz5(n: number): string[] {
    let stringArray: string[] = [];
    for(let i = 1; i <= n; i++){
        switch(true){
            case i % 3 == 0 && i % 5 == 0:
                stringArray.push("FizzBuzz");
                break;
            case i % 3 == 0:
                stringArray.push("Fizz");
                break;
            case i % 5 == 0:
                stringArray.push("Buzz");
                break;
            default:
                stringArray.push(i.toString());
                break;
        }
    }
    return stringArray;
};

function fizzBuzz6(n: number): string[] {
    let stringArray: string[] = [];
    for(let i = 1; i <= n; i++){
        let str: string = "";
        if(i % 3 == 0){
            str += "Fizz";
        }
        if(i % 5 == 0){
            str += "Buzz";
        }
        stringArray.push(str || i.toString());
    }
    return stringArray;
};

function fizzBuzz7(n: number): string[] {
    let stringArray: string[] = [];
    new Array(n).fill(0).forEach((_, i) => {
        let str: string = "";
        if((i + 1) % 3 == 0){
            str += "Fizz";
        }
        if((i + 1) % 5 == 0){
            str += "Buzz";
        }
        stringArray.push(str || (i + 1).toString());
    });
    return stringArray;
}


let list1: number[] = [1,2,3,4];
let list2: number[] = [1,3,4];

function combinedList(list1, list2): number[]{
    let combined: number[] = [];
    for(let i in list1){
        for(let x in list2){
    }
    return combined;
}

abstract class Car{
    wheels: number;
    pax: number;
    cargo: number;
    weight: number;

    constructor(wheels: number, pax: number, cargo: number, weight: number){
        this.wheels = wheels;
        this.pax = pax;
        this.cargo = cargo;
        this.weight = weight;
    }

    public drive(): void{
        console.log("Driving");
    }
    public stop(): void{
        console.log("Stopping");
    }
    public park(): void{
        console.log("Parking");
    }
    private refuel(): void{
        console.log("Refueling");
    }
}

class Truck extends Car{
    trailer: number;
    load: number;
    fuelType: boolean;
    range: number;
    
    constructor(wheels: number, pax: number, cargo: number, weight: number, trailer: number, load: number, fuelType: boolean, range: number){
        super(wheels, pax, cargo, weight);
        this.trailer = trailer;
        this.load = load;
        this.fuelType = fuelType;
        this.range = range;
    }

    override drive(): void{
        console.log("Truck is driving");
    }   
}

class Sedan extends Car{
    fuelType: boolean;
    range: number;

    constructor(wheels: number, pax: number, cargo: number, weight: number, fuelType: boolean, range: number){
        super(wheels, pax, cargo, weight);
        this.fuelType = fuelType;
        this.range = range;
    }
}


let sedan: Sedan = new Sedan(4, 5, 2, 2000, true, 500);
sedan.wheels = 3;

sedan.drive();
sedan.stop();
sedan.park();


let car: Car = (sedan as Car);

let truck: Truck = (sedan as Truck);
truck.drive();

//generics
function echo<T>(arg: T): T{
    return arg;
}

let result: string = echo<string>("Hello");
let result2: number = echo<number>(10);
let result3: boolean = echo<boolean>(true);
let result4: Sedan = echo<Sedan>(new Sedan(4, 5, 2, 2000, true, 500));
let invalidType: number = echo<number>(Number.parseInt("2"));
let stringResult: string = echo<string>((10).toString());

};
