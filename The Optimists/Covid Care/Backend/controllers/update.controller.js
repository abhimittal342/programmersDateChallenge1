const Update = require('../models/covidupdates.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request

    if(!req.body.text) {
        return res.status(400).send({
            message: "Update content can not be empty"
        });
    }

    // Create a Note
    const  update = new Update({
        text: req.body.text || "Untitled Note",
        location: req.body.location
    });

    // Save Note in the database
    update.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
res.json({"mess":"dsfdf"})
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  res.json({"mess":"dsfdf"})

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
res.json({"mess":"dsfdf"})
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
res.json({"mess":"dsfdf"})
};
