const { authJwt } = require("../middlewares");
const controller = require("../controllers/reflection.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/create", [authJwt.verifyToken], controller.create);

    app.get("/api/reflections", [authJwt.verifyToken], controller.findAll);

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