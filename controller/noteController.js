var generator = require('../Util/generator.js');
var memStorage = require('../Util/memory.storage.js');
var model = require('../model/note.model.js')


exports.getAllNotes = (req , res) => {

    /*var seqId   = generator.generate();
    memStorage.store.setItem(seqId , "1st_key");

    var seqId_2   = generator.generate();
    memStorage.store.setItem(seqId_2 , "2nd_key");


    var keys = memStorage.getKeys(memStorage.store);*/
    var values = memStorage.getValues(memStorage.store);
    console.log("Values ......" + JSON.stringify(values));
    return res.status(200).send(JSON.stringify(values));
}

exports.saveNote = (req , res) => {
    var seqID = generator.generate();
    var createdBy = "admin";
    var createdOn = new Date();
    //req.body
    var title = 'Future';
    var content = 'work hard';
    if(! title || !content){
        return res.status(500).send({ error: `Title and Content shouldn't be empty`});
    }

    var noteItem = memStorage.store.getItem(noteItem);
    if(! noteItem){
        return res.status(500).send({error: 'noteId is not exist'});
    }

    var Note = model.Note;
    var noteObj = new Note(seqID , title , content , createdBy , createdOn);
    memStorage.store.setItem(seqID , noteObj);
    res.status(201).send("Successfully note saved ..... ");
}


exports.updateNote = (req , res) => {
    var createdBy = "admin";
    var createdOn = new Date();
    //req.body
    var noteId = req.body.noteId;
    var title = 'Future';
    var content = 'work hard';
    if(!noteId){
        return res.status(500).send({ error: `Note Id shouldn't be empty`});
    }
    if(! title || !content){
        return res.status(500).send({ error: `Title and Content shouldn't be empty`});
    }


    
    var Note = model.Note;
    var noteObj = new Note(seqID , title , content , createdBy , createdOn);
    memStorage.store.setItem(seqID , noteObj);
    res.status(200).send("Successfully note saved ..... ");
    res.send("update note ..... ");
}






exports.deleteNote = (req , res) => {
    var noteId = req.params.noteId;

    //validate not empty
    if (!noteId){
    return res.status(500).send({ error: 'can not delete empty noteId'});
    }
    var noteItem = memStorage.store.getItem(noteId);
    if(!noteItem){
    return res.status(500).send({ error: 'noteId is not exist'});
    }

    memStorage.store.removeItem(noteId);
    return res.status(200).send("Successfully note deleted");
    
}