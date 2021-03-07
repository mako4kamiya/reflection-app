const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require("./user.model.js")(mongoose);
db.reflections = require("./reflection.model.js")(mongoose);
db.role = require("./role.model.js")(mongoose);
db.ROLES = ["user", "admin", "moderator"];


module.exports = db;