"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.set("port", process.env.PORT || 3005);
app.get("/", function (req, res) {
    res.send("Hi");
});
exports["default"] = app;
//# sourceMappingURL=app.js.map