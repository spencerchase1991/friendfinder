var fs = require("fs");
var path = require("path");
var raw = fs.readFileSync(path.join(__dirname, "friends.json"));
var friends = JSON.parse(raw);
module.exports = friends;