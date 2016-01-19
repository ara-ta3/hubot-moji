var defaultStringMaps = {
    zeroOneMap: {
        "0": "0",
        "1": "1"
    },
    stringMap: {
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
        "m":"0100010\n0110110\n0101010\n0100010\n0100010",
        "n":"0111110\n0100010\n0100010\n0100010\n0100010",
        "o":"0111110\n0100010\n0100010\n0100010\n0111110",
        "p":"0111110\n0100010\n0111110\n0100000\n0100000",
        "q":"0111110\n0100010\n0111110\n0000010\n0000010",
        "r":"0111000\n0100100\n0111000\n0101100\n0100110",
        "s":"0111110\n0100000\n0111110\n0000010\n0111110",
        "t":"0111110\n0001000\n0001000\n0001000\n0001000",
        "u":"0100010\n0100010\n0100010\n0100010\n0111110",
        "v":"1000001\n1100011\n0110110\n0011100\n0001000",
        "w":"1000001\n0101010\n0101010\n0101010\n0010100",
        "x":"1100011\n0110110\n0011100\n0110110\n1100011",
        "y":"1100011\n0110110\n0011100\n0011100\n0011100",
        "z":"0111110\n0000110\n0011000\n0110000\n0111110"
    }
};

var StringMapRepository = function(robot) {
    var ROBOT_STORAGE_KEY = "hubot-storage-key-YXJhdGF0YW5ha2E=";
    var stringMaps = (robot && robot.brain.get(ROBOT_STORAGE_KEY)) || defaultStringMaps;

    this.getStringMap = function() {
        return stringMaps.stringMap;
    };

    this.getZeroOneMap = function() {
        return stringMaps.zeroOneMap;
    };

    this.setBlank = function(zeroString) {
        var zeroOneMap = stringMaps.zeroOneMap;
        zeroOneMap["0"] = zeroString;
        return setZeroOneMap(zeroOneMap);
    };

    this.setFilled = function(oneString) {
        var zeroOneMap = stringMaps.zeroOneMap;
        zeroOneMap["1"] = oneString;
        return setZeroOneMap(zeroOneMap);
    };

    var setZeroOneMap = function(zeroOneMap) {
        stringMaps.zeroOneMap = zeroOneMap;
        commit();
        return stringMaps.zeroOneMap;
    };

    var commit = function() {
        robot && robot.brain.set(ROBOT_STORAGE_KEY, stringMaps);
    };
};

module.exports = StringMapRepository;




