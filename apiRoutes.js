const fs = require("fs");

module.exports = (app) => {

     
    let noteDB = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteDB);
    });

    //  retreives then adds note to db
    app.post('/api/notes', (req, res) => {
        
    // note located by ID then deleted
    app.delete('/api/notes/:id', (req, res) => {
      
    });
    });