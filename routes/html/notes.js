const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body = notes.length.toString();

  if (!validateNotes(req.body)) {
    res.status(400).send('The note that you entered is not properly formatted.');
  } else {
    const note = getNotes(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
