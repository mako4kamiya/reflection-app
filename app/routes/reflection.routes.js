module.exports = app => {
    const reflections = require("../controllers/reflection.controller.js");

    var router = require("express").Router();

    // find todays Reflections by createdAt
    router.get("/today", reflections.findTodays);

    // Retrieve a single Reflection with id
    router.get("/:id", reflections.findOne);

    // Update a Reflection with id
    router.put("/:id", reflections.update);

    // Delete a Reflection with id
    router.delete("/:id", reflections.delete);

    // Delete all Reflections
    router.delete("/", reflections.deleteAll);

    app.use('/api/reflections', router);
};