

// global variables ----------------------------------------------
const express = require("express");
const PORT = 4000;
const app = express();
const fs = require("fs");
const path = require("path");
const notes = [];



// --------------middleware------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// html links----------------------------------


module.exports = function(app) {

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname,  "../public/index.html"));
      });
      ​
      app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });

};

  ​
  




// -----------------api readfile for db-----------------

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile("./db/db.json", "utf8", function(data, error) {
            if (error) {
                return console.log(error);
            }

            const JSONobject = JSON.parse(data)

            return res.json(JSONobject)
        });
        console.log("read notes api");
    });


// ------------------api post to db-------------------------

    app.post("/api/notes", function(req, res) {
        const note = req.body;
        console.log("post successful")
        notes.push(note);
        const noteJSON = JSON.stringify(notes);
            function writeFile(){
                fs.writeFile(__dirname + '/../db/db.json', json, 'utf8',function(err) {
  
                 if (err){
                    return console.log(err);
                }
                console.log("appended file");
            });
        }
        writeFile()
      
        res.json(notes);
    });
};

require("./public/assets/js/index")(app);

app.listen(PORT, function () {
    console.log("listening on port" + PORT);
});