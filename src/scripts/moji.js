// Description
//  this displays alphabets in certain strings
//  mainly, used with slack emoji
// Commands:
//  hubot moji parse abc - echo abc by set strings
//  hubot moji set blank :black_circle: set blank string
//  hubot moji set filled :star: - set filled string
//  hubot moji status - confirm current blank and filled string
//  hubot moji print  - alias for parse
//  hubot moji printf - example: hubot moji printf abc :star: :black_circle:  => it displays abc with which is set :star: as filled and :black_circle: as blank

var Parser      = require(__dirname + "/../util/Parser.js");
var Repository  = require(__dirname + "/../repository/StringMapRepository.js");

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

    robot.respond(/moji print (.+)/i, function(msg) {
        var message = msg.match[1];
        var filtered= message.toLowerCase().replace(/ /, "");
        var parsed  = parser.parse(filtered);
        msg.send(parsed);
    });

    robot.respond(/moji printf (.+) (.+) (.+)/i, function(msg) {
        var message = msg.match[1];
        var filled  = msg.match[2];
        var blank   = msg.match[3];
        var zeroOneMap = {
            "0": blank,
            "1": filled
        };
        var parser = new Parser(repository.getStringMap(), zeroOneMap);
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
