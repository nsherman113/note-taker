const router = require('express').Router();
const { notes } = require('../../config/db');



router.get('/notes', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body = notes.length.toString();

  if (!validateAnimal(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNotes(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
