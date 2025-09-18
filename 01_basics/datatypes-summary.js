// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;    //undefined type

const id = Symbol('123')
const anotherid = Symbol('123') //id not equal to anotherid

const bigNumber = 1357363794573n


console.log(id == anotherid);





//Reference(Non primitive)

// Array, Objects, Functions

const heros = ["superman", "batman"];
let myObj = {
    name: "shreya",
    age: 22
}

const myFunction = function(){
    console.log("hello world");
}


/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/



//**********************************************//

// stack (primitive), heap (non-primitive)

let myYoutubename = "shreyanairdotcom"