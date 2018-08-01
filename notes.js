//console.log("Starting of notes.js");

const fs = require('fs');

var fetchNotes = () =>{
    try{
        var notesString = fs.readFileSync('notes-data.json');
        //notes = ;
        return JSON.parse(notesString);
    } catch(e){
        return [];
    }

};

var saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title,body)=>{
    var notes = fetchNotes();
    var note = {
        title : title,
        body : body
    };
    // Here we are checking if notes title is already presnt in Our Notes Array using filer Function
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    var duplicateNotes = notes.filter( (note)=> note.title === title ); // This Code is same as below
    // var duplicateNotes = notes.filter( (note)=>{
    //     return note.title === title;
    // });

    if(duplicateNotes.length == 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
    //console.log("In notes.js addNote ",title,body);  
};

var fetchAllNotes = ()=> {
    return fetchNotes();
};

var fetchSingleNote = (title)=> {
    var notes = fetchNotes();
    var singleNote = notes.filter( (note) => {
        return note.title === title;
    });
    return singleNote[0];
    //console.log("Fetching Note with Title: ",singleNote);
};

// remove notes

var removeSingleNote = (title)=> {
    var notes = fetchNotes(); // fetch notes
    var remainingNotes = notes.filter( (note) => {
        return note.title !== title;
    }); // filter notes, removing the one with the title of argument
    saveNotes(remainingNotes);
    return notes.length !== remainingNotes.length ;  
};

logNotes = (note) =>{
    console.log('Note Found');
    console.log('-----------');
    console.log('Title :', note.title);
    console.log('Body :', note.body);
} 

module.exports = {
    addNote,
    fetchAllNotes,
    fetchSingleNote,
    removeSingleNote,
    logNotes
};

// module.exports.add = (a,b)=>{
//     return (a+b);
// };
// add(a,b)