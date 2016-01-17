// Description
//  TODO
// Commands:
//  hubot moji abc - echo abc by set chars

var Parser      = require("../util/parser.js");
var Default     = require("../data/default.js");
var path        = require("path");
var zeroOneMap  = Default.zeroOneMap;
var stringMap   = Default.stringMap;

var confFilePath = process.env.HUBOT_MOJI_ZEROONEMAP_CONF;
if (confFilePath) {
    var p = path.resolve(process.cwd() + "/" + confFilePath);
    var conf = require(p);
    if (typeof conf["0"] === "string" && typeof conf["1"] === "string") {
        zeroOneMap = conf;
    }
}

var parser = new Parser(stringMap, zeroOneMap);

module.exports = function(robot) {
    robot.respond(/moji (.+)/i, function(msg) {
        var parsed = parser.parse(msg.match[1]);
        msg.send(parsed);
    });
};
