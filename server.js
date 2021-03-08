const express = require("express");
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
var app = express();


// parse incoming string or array data 
app.use(express.urlencoded({ extended: true})); // <-- method that takes incoming POST data and converts it to key/value data pairings that can be accessed in the req.body object. 

// parse incoming JSON data 
app.use(express.json());

// middleware 
app.use(express.static('public'));

const { data } = require('./db/db');



function createNote (body, notesArray) {
    console.log(body);
    // our function's main code will go here!
    const notes = body;
    notesArray.push(notes);

    fs.writeFileSync(
      path.join(__dirname, './db/db'),
      JSON.stringify({ notes: notesArray}, null, 2)
    );
    return notes;
}

  app.post('/api/notes', (req, res,) => {
    // post route that adds new note
      const note = createNote(req.body, notes);
      res.json(note);
    });

   


  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  }); 
  
  
  app.listen(PORT, () => {
    console.log('API server now on port' + PORT);
})
