// var obj ={
//     name : "Apoorv"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Apoorv","age": 29}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
    title : 'Some Title',
    body : 'Some Body'
};
orginalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',orginalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log("typeOf note : ", typeof note);
console.log('Note ',note);










