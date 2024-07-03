//Q1. Create a function to calculate the factorial of a number using closure

function Factorial(){
    let number = document.getElementById("input").value
    function solve(){
        let answer = 1;
        while(number>0){
            answer *= number--
        }
        return answer;
    }
    const answer = number>0 ? solve() : " Number must be positive";
    document.getElementById("answer").innerHTML = answer
    document.getElementById("label").style.display = "block"
}

// Q2. Write a JavaScript program to test if the first character of a string is uppercase or not, if not then set the first character to uppercase

function checkUpperCase(){
    const string = document.getElementById("input2").value
    let answer = ''
    if(string.charCodeAt(0)>=65 && string.charCodeAt(0)<=90){
        answer = "First character is already upper case"
    } else if(!isNaN(string.charAt(0))){
        answer = "First character must be an alphabate"
    }else {
        answer = string.replace(string.charAt(0),string.substring(0,1).toUpperCase())
    }
    document.getElementById("answer2").innerHTML = answer
}

/*
Q3. Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.

sum() returns the sum of these properties.

mul() returns the multiplication product of these properties.
*/

function read() {
    const a = prompt("Enter first number")
    if(isNaN(a)) {
        alert("Please enter a valid number")
        return ;
    }
    const b = prompt("Enter second number")
    if(isNaN(b)) {
        alert("Please enter a valid number")
        return ;
    }
    obj.read(a,b);
    alert("Number Successfully readed")
}
function sum() {
    alert(obj.sum())
}

function mul() {
    alert(obj.mul());
}

function Calculator() {
    this.read = (a, b) =>  {
        this.a = a
        this.b = b
    }
    this.sum = () =>  {
        if(!this.a || !this.b) return "First specify the numbers"
        return parseInt(this.a) + parseInt(this.b)
    }
    this.mul = () => {
        if(!this.a || !this.b) return "First specify the numbers"
        return this.a * this.b
    }
}

const obj = new Calculator();


// Q4. Deep clone

function clone() {
    const value = document.getElementById("input3").value
    let object = ''
    let answer = {}
    try{
        object = JSON.parse(value)
        for(let itr in object){
            answer[itr] = object[itr]
        }
        document.getElementById("answer3").innerHTML = JSON.stringify(answer)
    } catch(e) {
        alert("Invalid Object")
    }
}

function clone2(object) {
    let answer = {}
    for(let itr in object){
        answer[itr] = object[itr]
    }
    return answer;
}


let obj2 = {
    key1:"value",
    key2:true,
    method: () => {
        console.log('hello world')
    }
}

console.log(clone2(obj2))