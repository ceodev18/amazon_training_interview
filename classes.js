//data type in JS
//primitive type
/*{
    1
    true
    "hello"
    false
    undefined
    null
}*/
//reference type --> all defined by programmer 
// [] data structure
//thats why [] === [] are false

//context vs scope
function name() {
    let a = 4
}

//console.log(a)
// ReferenceError: a is not defined --> this is scope, where we are whitin an object


const sample_class = {
    base_function : function(){
        console.log(this);
    }
}
sample_class.base_function()

//instantiation

class Player{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${name} and have a type ${type}`);
    }
}