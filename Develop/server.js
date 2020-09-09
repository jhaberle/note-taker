// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Empty notes array
// =============================================================
var notes = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

// Displays all notes
app.get("/api/notes", function(req, res) {
  return res.json(notes);
});

// Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
app.post("/api/notes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newNote = req.body;
  function writeFile(){
    fs.writeFile(__dirname + '/../db/db.json', json, 'utf8',function(err) {

     if (err){
        return console.log(err);
    }
    console.log("appended file");
});
}
writeFile()

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newNote.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newNote);

  notes.push(newNote);

  res.json(newNote);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
