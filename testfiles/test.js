

var myObject = {
    "json-style":"definition",
    key:"value",
    "name":"property",
    
    "method" : function() {console.log("This is an object method")}
};

// console.log(myObject.key);
// console.log(myObject["key"]);


const myvar = "potto";

{
    console.log(myvar);
};
const mylist = ["abcstring123", "string456", "string123","string456", "stringacb123456", "string123", "stringabc123456"];
// mylist[1] = "gday";

console.log(mylist);

// create a list of filters, then filter the list of values according to the list of filters.

const strFilter1 = "1";
const strFilter2 = "a";
const strFilter3 = "6";

const listOfFilters = [];

if (strFilter1) {
    listOfFilters.push(strFilter1);
};

if (strFilter2){
    listOfFilters.push(strFilter2);
};

if (strFilter3){
    listOfFilters.push(strFilter3);
};


let myVar = ""; // Falsey 

myVar ? console.log("MyVar is cool") : console.log("Myvar is less cool");