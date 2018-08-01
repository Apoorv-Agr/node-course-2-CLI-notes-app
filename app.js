//console.log("Starting App");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yards = require('yargs');

const notes = require('./notes');


//console.log(process.argv);

var titleOptions = {
    describe : 'Title of note',
    demand : true,
    alias : 't'
};
var bodyOptions = {
    demand : true,
    describe : 'Body of note',
    alias : 'b'
};

const cmd_line_argv = yards
.command('add','Add a new note',{
    title :titleOptions,
    body :bodyOptions
})
.command('list','List all notes')
.command('read','Read a note',{
    title :titleOptions
})
.command('remove','Delete a note',{
    title :titleOptions
})
.help()
.argv;

// var command = process.argv[2]; //before using yards

var command = cmd_line_argv._[0];
//console.log('yards.argv: ',cmd_line_argv);
//console.log('command:-',command);
if(typeof command !== 'undefined'){
    if(command.toLocaleLowerCase() === "add"){
        //console.log("Adding New note");
        var note = notes.addNote(cmd_line_argv.title,cmd_line_argv.body);
        _.isUndefined(note) ? console.log("Note Already Exists") : (notes.logNotes(note)) ;
    }else if(command.toLocaleLowerCase() === "list"){
        var allNotes = notes.fetchAllNotes();
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach(note => {
            notes.logNotes(note);
        });
    }else if(command.toLocaleLowerCase() === "read"){
        var singleNote = notes.fetchSingleNote(cmd_line_argv.title);
        _.isUndefined(singleNote) ? console.log(" Note Not Found") : notes.logNotes(singleNote);
        // if(singleNote){
        //     console.log('Note Found');
        //     console.log('-----------');
        //     console.log('Title :', singleNote.title);
        //     console.log('Body :', singleNote.body);
        // }else{
        //     console.log("Note not Found");
        // }
    }else if(command.toLocaleLowerCase() === "remove"){
        var noteRemoved = notes.removeSingleNote(cmd_line_argv.title);
        var message = noteRemoved ? "Note was removed" : "Note Not found";
        console.log(message);
    }else{
        console.log("command not Found");
    }
}else{
    console.log("command not Found");
}

// let uniqueArr = _.uniq(['Apoorv',1,'Apoorv',1,2,3,4,4,5]);
// console.log(uniqueArr);
// var addRes = notes.add(9,-6);
// console.log(addRes);
// var user = os.userInfo();
// fs.appendFile('greeting.txt',` Hello ${user.username}`,(err)=>{
//     if(err){
//         console.log("Unable to write file.");
//     }else{
//         console.log("Write file success.")
//     }
// })