// namespaces so i can collapse it.

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
    function myfunc(){
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

{// Objects

    // creation via a literal

    var myObject = {
        "jsonstyle":"definition",
        key:"value",
        "name":"property",
        method : function() {console.log("This is an object method")}
    };


    // constructor function

    function MyObject(var1, var2, var3){
        this.property1 = var1;
        this.property2 = var2;
        this.property3 = var3;
    };
    var myObject = new MyObject("string1", 96, "something")


    // via Object.create and an existing object to use as a prototype

    var myProtoObject = {
        "jsonstyle":"definition",
        key:"value",
        "name":"property",
        method : function() {console.log("This is an object method")}
    };

    let myNewObject = Object.create(myProtoObject);
    myNewObject.jsonstyle = "stuff";


    // accessing properties

    myObject.property1;
    myObject["property1"];


    // calling methods

    myObject.method()



};
