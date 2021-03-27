const controller = require("../controllers/reflection.controller");

module.exports = function(app) {
    app.post("/api/:id/create", controller.create);

    // find todays controller by createdAt
    // app.get("/today", controller.findTodays);

    // // Retrieve a single Reflection with id
    // app.get("/:id", controller.findOne);

    // // Update a Reflection with id
    // app.put("/:id", controller.update);

    // // Delete a Reflection with id
    // app.delete("/:id", controller.delete);

    // // Delete all Reflections
    // app.delete("/", controller.deleteAll);
};