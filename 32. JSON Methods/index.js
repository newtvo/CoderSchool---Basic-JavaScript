var fs = require('fs');
var readlineSync = require('readline-sync');

var myDog = { name: 'Milu', age: 1, dead: false};
var myDogString = JSON.stringify(myDog);

//console.log(myDogString);

var myCatString = '{ "name" : "Tom", "age" : 2, "dead" : true}';
var myCat = JSON.parse(myCatString);
//console.log(myCat);

//Exercise
// 1. Show all students
// 2. Create a new student
// 3. Save & Exit

// > 1.
// Save to ./data.json -> fs.readFileSync, JSON.parse
// > 2. 
// > Your Name?
// > Your Age?
// > Your Class?
// > 3.
var flag = true;
var arrNewStudent = [];

while(flag) {

var question = readlineSync.question("Please choose the following options: ");
if ( question == '1' ) {
    var showAllData = fs.readFileSync('./data.json', { encoding: 'utf-8' });
    var result = JSON.parse(showAllData);
    arrNewStudent.push(result);
    console.log(showAllData);
}
else if ( question == '2' ) {

    var newStudent = {};

    var name = readlineSync.question("Your Name ? ");
    newStudent.name = name;
    
    var age = readlineSync.question("Your Age ?");
    newStudent.age = age;

    var classRoom = readlineSync.question("Your Class ?");
    newStudent.classRoom = classRoom;

    arrNewStudent.push(newStudent);
    
    fs.writeFileSync("./data.json", JSON.stringify(arrNewStudent));
    console.log(newStudent);
   
   // console.log(arrNewStudent)
   
  }
else {
    // fs.writeFileSync("./data.json", log);
    
    flag = false;
 }
}
