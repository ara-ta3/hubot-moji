// Description
//  TODO
// Commands:
//  hubot moji abc - echo abc by set chars


module.exports = function(robot) {
    robot.respond(/moji (.+)/i, function(msg) {
        var parsed = msg.split("").map(function(a) {
            return stringMap[a].replace(/0/,zeroOneMap["0"]).replace(/1/,zeroOneMap["1"]);
        });
        msg.send parsed.join("");
    });
};

var zeroOneMap  = {
    "0": ":wwww:",
    "1": ":hoto:"
};

var stringMap = {
    "a":"0011100\n0100010\n0111110\n0100010\n0100010",
    "b":"0111100\n0100010\n0111110\n0100010\n0111100",
    "c":"0111110\n0100000\n0100000\n0100000\n0111110",
    "d":"0111100\n0100110\n0100110\n0100110\n0111100",
    "e":"0111110\n0100000\n0111110\n0100000\n0111110",
    "f":"0111110\n0100000\n0111100\n0100000\n0100000",
    "g":"0011100\n0100000\n0100110\n0100010\n0011100",
    "h":"0100010\n0100010\n0111110\n0100010\n0100010",
    "i":"0011100\n0001000\n0001000\n0001000\n0011100",
    "j":"0001110\n0000100\n0000100\n0100100\n0011000",
    "k":"0100110\n0101100\n0111000\n0101100\n0100110",
    "l":"0100000\n0100000\n0100000\n0100000\n0111110",
    "m":"0111110\n0101010\n0101010\n0101010\n0101010",
    "n":"0111110\n0100010\n0100010\n0100010\n0100010",
    "o":"0111110\n0100010\n0100010\n0100010\n0111110",
    "p":"0111110\n0100010\n0111110\n0100000\n0100000",
    "q":"0111110\n0100010\n0111110\n0000010\n0000010",
    "r":"0111000\n0100100\n0111000\n0101100\n0100110",
    "s":"0111110\n0100000\n0111110\n0000010\n0111110",
    "t":"0111110\n0001000\n0001000\n0001000\n0011100",
    "u":"0100010\n0100010\n0100010\n0100010\n0111110",
    "v":"1000001\n1100011\n0110110\n0011100\n0001000",
    "w":"1000001\n0101010\n0101010\n0101010\n0010100",
    "x":"1100011\n0110110\n0011100\n0110110\n1100011",
    "y":"1100011\n0110110\n0011100\n0011100\n0011100",
    "z":"0111110\n0000110\n0011000\n0110000\n0111110"
}
;