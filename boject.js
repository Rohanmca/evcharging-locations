// object creation done in javascript using 7 types
// using object contructor=
var object=new Object({
    name:rohan,
    age:22,
    qualification:mca, 
});
console.log(object);

// using create method
var object=Object.create(null);


// using object literals
var object={
    name:rohan,
    age:22, 
    qualification:mca,
}


// using function constructor
function Person(name,age,qualification){
    this.name=name,
    this.age=age,
    this.qualification,

}
var object= new Person("rohan",22,"mca");


// function constructor using  protype
function person(){
    person.prototype.name="rohan";
    person.prototype.age=22;
    person.prototype.qualification="mca"
}

// es6 class syntax
class person {
    constructor(name){
        this.name=name;
        this.age=22;
        this.qualification="mca";
    }
}


// singleton  pattern 
/*
     a singleton isan object which can only be instatiated one time ,repeated calls to 
     to its constructor return the some instance and this way one can ensure that they dont accidentally  creates 
     multiple instances
     




*/