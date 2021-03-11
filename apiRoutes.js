const fs = require("fs");

module.exports = (app) => {

     
    let noteDB = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteDB);
    });

    //  retreives then adds note to db
    app.post('/api/notes', (req, res) => {

        let lastId;
        if (noteDB.length) {
            lastId = Math.max(...(noteDB.map(note => note.id)));
        } else {
            lastId = 0;
        }
        const id = lastId + 1;

        noteDB.push({ id, ...req.body });
      
        res.json(noteDB.slice(-1));
    });

    // note located by ID then deleted
    app.delete('/api/notes/:id', (req, res) => {
        let getNote = noteDB.find(({ id }) => id === JSON.parse(req.params.id));

        noteDB.splice(noteDB.indexOf(getNote), 1);
        res.end("deleted!");
    });

};