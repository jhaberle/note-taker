// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

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
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Displays all notes
app.get("/api/notes", function(req, res) {
  return res.json(notes);
});




// Create New notes - takes in JSON input
app.post("/api/notes", function(req, res) {
    var newNotes = req.body;
    console.log(newNotes);
    notes.push(newNotes);
    res.json.newNotes;
    var json = JSON.stringify(notes);
    
    
    function writefile() {
        fs.writeFile(__dirname + '/db/db.json', json, 'utf8', function(err) {
            if (err){
                return console.log(err);
            }
            console.log("note added")
        });
        
    }
    writefile()
    res.json(notes);
  
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
