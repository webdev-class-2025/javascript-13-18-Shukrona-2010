let userName = "Shukrona"
let age = 15;
let city = "Khorog";

console.log(`My name is ${userName}, I am ${age} year, i am from ${city} city.`);

if (age >=18) {
    console.log("Savershenoletne");
} else{
    console.log("Nesovershenoletne");
}

function greet(name){
    console.log(`Welcome, ${name}`);
}

greet("Shukrona");

function multiply(a, b){
    return a*b;
}

console.log(multiply(10, 20));

for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(`${i} - чётное`);
    }else{
        console.log(`${i} - nechetnoye`);
    }
}