// Description
//  TODO
// Commands:
//  hubot moji abc - echo abc by set chars

var Parser      = require("../util/Parser.js");
var Repository  = require("../repository/StringMapRepository.js");

module.exports = function(robot) {
    var init = function() {
        parser = new Parser(repository.getStringMap(), repository.getZeroOneMap());
        return parser;
    };

    var status = function() {
        var zeroOneMap = repository.getZeroOneMap();
        return "blank: " + zeroOneMap["0"] + ", filled: " + zeroOneMap["1"];
    };

    var repository  = new Repository(robot);
    var parser      = new Parser(repository.getStringMap(), repository.getZeroOneMap());

    robot.respond(/moji parse (.+)$/i, function(msg) {
        var message = msg.match[1];
        var filtered= message.toLowerCase().replace(/ /, "");
        var parsed  = parser.parse(filtered);
        msg.send(parsed);
    });

    robot.respond(/moji set blank (.+)/i, function(msg) {
        var zeroString = msg.match[1];
        repository.setBlank(zeroString);
        init();
        msg.send(status());
    });

    robot.respond(/moji set filled (.+)/i, function(msg) {
        var oneString = msg.match[1];
        repository.setFilled(oneString);
        init();
        msg.send(status());
    });

    robot.respond(/moji status$/i, function(msg) {
        msg.send(status());
    });
};
