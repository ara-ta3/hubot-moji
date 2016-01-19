
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

    this.clear = function() {
        stringMaps = defaultStringMaps;
        return commit();
    };

    var setZeroOneMap = function(zeroOneMap) {
        stringMaps.zeroOneMap = zeroOneMap;
        commit();
        return stringMaps.zeroOneMap;
    };

    var commit = function() {
        !!robot && robot.brain.set(ROBOT_STORAGE_KEY, stringMaps);
    };
};

var defaultStringMaps = {
    zeroOneMap: {
        "0": "0",
        "1": "1"
    },
    stringMap: {
        "a":[
            "0011100",
            "0100010",
            "0111110",
            "0100010",
            "0100010"
        ],
        "b":[
            "0111100",
            "0100010",
            "0111110",
            "0100010",
            "0111100"
        ],
        "c":[
            "0111110",
            "0100000",
            "0100000",
            "0100000",
            "0111110"
        ],
        "d":[
            "0111100",
            "0100110",
            "0100110",
            "0100110",
            "0111100"
        ],
        "e":[
            "0111110",
            "0100000",
            "0111110",
            "0100000",
            "0111110"
        ],
        "f":[
            "0111110",
            "0100000",
            "0111100",
            "0100000",
            "0100000"
        ],
        "g":[
            "0011100",
            "0100000",
            "0100110",
            "0100010",
            "0011100"
        ],
        "h":[
            "0100010",
            "0100010",
            "0111110",
            "0100010",
            "0100010"
        ],
        "i":[
            "0011100",
            "0001000",
            "0001000",
            "0001000",
            "0011100"
        ],
        "j":[
            "0001110",
            "0000100",
            "0000100",
            "0100100",
            "0011000"
        ],
        "k":[
            "0100110",
            "0101100",
            "0111000",
            "0101100",
            "0100110"
        ],
        "l":[
            "0100000",
            "0100000",
            "0100000",
            "0100000",
            "0111110"
        ],
        "m":[
            "0100010",
            "0110110",
            "0101010",
            "0100010",
            "0100010"
        ],
        "n":[
            "0100010",
            "0110010",
            "0101010",
            "0100110",
            "0100010"
        ],
        "o":[
            "0111110",
            "0100010",
            "0100010",
            "0100010",
            "0111110"
        ],
        "p":[
            "0111110",
            "0100010",
            "0111110",
            "0100000",
            "0100000"
        ],
        "q":[
            "0111110",
            "0100010",
            "0111110",
            "0000010",
            "0000010"
        ],
        "r":[
            "0111000",
            "0100100",
            "0111000",
            "0101100",
            "0100110"
        ],
        "s":[
            "0111110",
            "0100000",
            "0111110",
            "0000010",
            "0111110"
        ],
        "t":[
            "0111110",
            "0001000",
            "0001000",
            "0001000",
            "0001000"
        ],
        "u":[
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0111110"
        ],
        "v":[
            "1000001",
            "1000001",
            "0100010",
            "0010100",
            "0001000"
        ],
        "w":[
            "0100010",
            "0101010",
            "0101010",
            "0101010",
            "0010100"
        ],
        "x":[
            "0100010",
            "0010100",
            "0001000",
            "0010100",
            "0100010"
        ],
        "y":[
            "0100010",
            "0110110",
            "0011100",
            "0001000",
            "0001000"
        ],
        "z":[
            "0111110",
            "0000110",
            "0011000",
            "0110000",
            "0111110"
        ]
    }
};

module.exports = StringMapRepository;

