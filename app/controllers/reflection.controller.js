const db = require("../models");
const Reflection = db.reflections;

// Create and Save a new Reflection
exports.create = (req, res) => {
    const id = req.params.id;

    // Create a Reflection
    const reflection = new Reflection({
        first_condition: req.body.first_condition,
        realization: req.body.realization,
        action: req.body.action,
        last_condition: req.body.last_condition,
        user_id:id
    });

    // Save Reflection in the database
    reflection
    .save(reflection)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Reflection."
        });
    });
};



/*
// Retrieve all Reflections from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    Reflection.find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving reflections."
        });
    });
};

// Find a single Reflection with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Reflection.findById(id)
    .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found Reflection with id " + id });
        else res.send(data);
    })
    .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving Reflection with id=" + id });
        });
};

// Update a Reflection by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Reflection.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Reflection with id=${id}. Maybe Reflection was not found!`
            });
        } else res.send({ message: "Reflection was updated successfully." });
        })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Reflection with id=" + id
        });
    });
};

// Delete a Reflection with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Reflection.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                message: `Cannot delete Reflection with id=${id}. Maybe Reflection was not found!`
                });
            } else {
                res.send({
                message: "Reflection was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Reflection with id=" + id
            });
        });
};

// Delete all Reflections from the database.
exports.deleteAll = (req, res) => {
    Reflection.deleteMany({})
    .then(data => {
        res.send({
            message: `${data.deletedCount} Reflections were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while removing all reflections."
        });
    });
};

*/