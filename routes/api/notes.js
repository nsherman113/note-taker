const router = require("express").Router();
const app = express();
const fs = require("fs");

//read the db.json file using the fs module
app.get("/notes", (req, res) => {
  const result = [{ title: "yay", text: "wow okay what is going on?" }];

  //we are reading text
  fs.readFile("./config/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(data)
    let parsedData = JSON.parse(data);
    console.log(parsedData);

    if (data) {
      res.json(parsedData);
    } else {
      res.send(404);
    }
  });
});

//we need to read with fs module the db json
//convert req.body into JSON we can add to our db json
//write the new db json over the old one
app.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be

  let response = req.body;
  parsedData.push(response);
  console.log(response);

  //maybe make a new object from response
  const newResult = [{ title: "new note", text: "adding new note"}]

  fs.readFile("./config/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(data)
    let parsedData = JSON.parse(data);
    console.log(parsedData);
    updateNote();
    console.log("New note added:  " + response.title);
    //push the response to the parsedData here

    let newDBJSON = response.push(parsedData);

    //write file with the newDBJSON variable, to overwrite the old one
    function updateNote() {
    fs.writeFile("./config/db.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      } else {
        return newDBJSON;
      }
    });
  }
  });
});
module.exports = router;
