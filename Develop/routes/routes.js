const express = require("express");
const PORT = 4000;

// my code ----------------------------------------------
const express = require("express");
const PORT = 4000;
const app = express();
const fs = require("fs");
const path = require("path");
const note = [];

const writeFileAsync = util.promisify(fs.writeFile);

// --------------middleware------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// html links---------------------------------------

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
      });
      
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "notes.html"));
      });
}

module.exports(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile("./db/db.json", "utf8", function(data, error) {
            if (error) {
                return console.log(error);
            }

            const JSONobject = JSON.parse(data)

            return res.json(JSONobject);
        })
    })
}

// checking for notes with id's ---------------------------------------------------

// app.get("/api/notes/:notes", function(req, res) {
//   var chosen = req.params.$noteList;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });



// _______________________-------------------------------------______________---