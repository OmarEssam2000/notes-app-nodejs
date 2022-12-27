exports.Note = class Note {

    constructor(noteId , title , content , createdBy , CreatedOn){
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.CreatedOn = CreatedOn;
    }
}