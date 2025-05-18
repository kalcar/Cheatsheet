
if (false)
{// let vs const vs var

    let myLETvar = "string1";       // use more over var, more safe
    var myVARvar = "string2";       // use conditionally, be careful
    const myCONSTvar = "string3";   // use most often when you can

    // let - block scoped, accessable in lower blocks
    {
        console.log(myLETvar);
        let letVar2 = 12;
        {
            console.log(letVar2); // me gusta
            console.log(myLETvar);
        };
    };
    //console.log(letVar2) // no bueno

    // reassignable

    myLETvar = "new value";


    // hoisted to the top of block scope, but not initalized
    // for let, it doesnt really impact code, but does with var variables

    // var is function scoped. GLOBAL IF OUTSIDE A FUNCTION
    function myfunc() {
        var myvar = 'hehehe';
        console.log(myvar);
    };
    // console.log(myvar); // no dice

    // var is reassignable
    myVARvar = "reassigned";

    // var is hoisted to the top of the scope and INITALIZED
    // you can call it before it is defined, and it wont error

    console.log(notdefinedyet) // this resolves to undefined, doesnt error
    var notdefinedyet = "hello" // now defined with a value

    // const has block scope, and in lower blocks
    // see let for examples

    // const is hoisted to the top of the scope, and not initalized

    // const is not reassignable, but mutable

    // myCONSTvar = "cant do this";
    const mylist = ["this", "can", "be", 'changed'];
    mylist[1] = "gday";

};

if (false)
{// Objects

    // creation via a literal

    var myObject = {
        "jsonstyle": "definition",
        key: "value",
        "name": "property",
        method: function () { console.log("This is an object method") }
    };


    // constructor function

    function MyObject(var1, var2, var3) {
        this.property1 = var1;
        this.property2 = var2;
        this.property3 = var3;
    };
    var myObject = new MyObject("string1", 96, "something")


    // via Object.create and an existing object to use as a prototype

    var myProtoObject = {
        "jsonstyle": "definition",
        key: "value",
        "name": "property",
        method: function () { console.log("This is an object method") }
    };

    let myNewObject = Object.create(myProtoObject);
    myNewObject.jsonstyle = "stuff";


    // accessing properties

    myObject.property1;
    myObject["property1"];


    // calling methods

    // myObject.method()



};

// Ternary Operator
if (false)
{
    // structure takes 3 operands:
    // Condition
    // Question Mark (operator)
    // Expression if condition is truthy
    // Colon (structure/syntax?)
    // Express if condition is falsey

    let myVar = ""; // Falsey 

    myVar ? console.log("MyVar is truthy") : console.log("Myvar is less truthy");

    // But dont use it as a replacement for ifs. This is used primarily for variable assignment.
    // use ifs for clarity.

    let myVar2 = myVar ? "assign this if myvar is truthy" : "its falsey so this";


};

// 'this' Keyword
if (false)
{
    // The this keyword refers to the object in which it belongs.
    // this = parentObject
    const myObject = {
        property1 : 123,
        property2 : "abc",
        method : function(string) { 
            console.log("METHOD CALLED "+string)
        },
        thisMethod : function() { 
            console.log(this.property1)
        }
    };
    // myObject.thisMethod();

    // commonly, the code is designed to return itself, so you can chain 'this'
    // or object members together.
    let mySelfReturningObject = {
        property : 1,
        property2 : "abc",
        method: function () {
            console.log('somecode');
            return this;
        },
        method2: function(property2) {
            console.log('somecode2');
            return this;
        }

    }
    mySelfReturningObject.method().method().method2();
};

// Arrow Functions
if (false)
{
// Arrow functions are shorthand functions.
// the syntax is designed for convience, but imo is misleading and leads to confusion
// supports none to many parameters
// cannot be used as constructors, and has no 'this'

// normal function declaration and definition
function thisFunction(param1, param2) {
    console.log(param1);
    return param2;
};

() => {console.log('Arrow function with no params')};

param1 => {console.log(param1);};
// Arrow function with 1 param, no parenthesis needed

(param1, param2, paramN) => {
    // arrow function with an arbitrary number of parameters.
    console.log(param1);
    console.log(param2);
    console.log(paramN);
    return param1;
};

// arrows can be async

async param1 => {
    return param1;
};

// braces can be omitted if the function consists of a single return statement

(a, b) => a + b;

// arrow functions returning object literals doesnt work as expected. it needs parenthesis
// arrow functions first see curly braces as the body
//() => {doesnt : 'work'}

() => ({does: 'work'});


// so, you can define a little function like this

const yayfunc = (a, b) => a % b; // imo, why ever do this? the only thing that indicates that this is a function is the arrow, and it looks like a comparison operator, and it the return isnt explicit. it only makes the code harder to read unless you are familiar with javascript. this syntax can eat my ass, and i will never use this syntax unless i have to.

// compare to this v
function yayfunc1(a, b) {
    return a % b;
};
// or if you want to make the function a variable, this
const yayfunc2 = function (a, b) {
    return a % b;
}

// dont need to make a note of this really because ill never define an arrow function in a class
// arrow functions dont work inside of class definitions because its auto bounded in the context it was defined in. not execution context.
// so it doesnt have a proper 'this', and leads to unexpected behavior



};

// Callbacks in functions
if (false){
// callbacks are functions passed as arguments into functions

const myFunc = function(param){
    console.log('functions are fun!')
};

function outerFun(funnybunny){
    console.log('we in the outer reaches of the function universe')
    let variable = 'functions! except arrow are fun!';
    funnybunny(variable);
};

outerFun(myFunc);

// oftentimes, theyre just arrow function 

outerFun((param) => {
    console.log(param);
});
// i really dont like callback functions the way they are proliferated in many javascript instances. 
// it feels wrong. the function callback is like taking the output of the function, but instead its part of the function call.
// plain backwards!
// it feels like it should be like this
// Callback(functioncall(parameter));
// the .then syntax is much better than messy callbacks, which harkens back to the broken design of javascript
// just friggin do it right the first time dawg

};

// Asynchronous functions. Async and Await
if(true){
    // asynchronous functions are different objects than a usual synchronous function
    // the async means that something in the function isnt synchronously called
    // pretty much means that something inside takes a long time and you dont want to hang up the code while it runs

    // this isnt really asynchronous without using a promise
    function bigfunc(){
        console.log('adding every number to 1,000,000,000')

        // im anti arrow.
        function oneBillionExecutions(resolve,reject, param) {
            let sum = 0;
            for (let i = 0; i < 2000000000; i++){
                sum = sum + i;
            };
            resolve(sum);

            // on error reject(err)
        };
        return new Promise(oneBillionExecutions);

    };

    async function Myfunction(parameter){
        console.log('async function was called');
        const someval = await bigfunc();
        console.log(`Done! got the value ${someval}`);

    };

    async function evokeFunction(funfunfunc){
        console.log( await bigfunc());;
    }
    // Myfunction('123');
    console.log(evokeFunction(bigfunc))
    // console.log(bigfunc().then(returnResult));
    console.log('while its doing that, let me do a lil this.');

};