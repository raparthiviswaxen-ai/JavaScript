// Objects:
// New Keyword used in function for object creation like: after defining a function sam(), we write like console.log( new sam());
// then the new keyword will make the function a constructor fn, the role of that constructor fn is to create objects.
// objects are unordered


// function person(){
//     this.name = "vishwa",
//     this.age = 25,
//     this.gender= "male";
//     this.favColor = "red";

// }

// let p1= new person();
// console.log(p1);

function person(naam,umer,sach,rang){
    this.name = naam,
    this.age = umer,
    this.gender= sach;
    this.favColor = rang;

}

let p1= new person("vishwa",25,"male","red");
console.log(p1);