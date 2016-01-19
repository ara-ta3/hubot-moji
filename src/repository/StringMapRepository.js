
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
            "01110",
            "10001",
            "11111",
            "10001",
            "10001"
        ],
        "b":[
            "11110",
            "10001",
            "11111",
            "10001",
            "11110"
        ],
        "c":[
            "11111",
            "10000",
            "10000",
            "10000",
            "11111"
        ],
        "d":[
            "11110",
            "10011",
            "10011",
            "10011",
            "11110"
        ],
        "e":[
            "11111",
            "10000",
            "11111",
            "10000",
            "11111"
        ],
        "f":[
            "11111",
            "10000",
            "11110",
            "10000",
            "10000"
        ],
        "g":[
            "01110",
            "10000",
            "10011",
            "10001",
            "01110"
        ],
        "h":[
            "10001",
            "10001",
            "11111",
            "10001",
            "10001"
        ],
        "i":[
            "01110",
            "00100",
            "00100",
            "00100",
            "01110"
        ],
        "j":[
            "00111",
            "00010",
            "00010",
            "10010",
            "01100"
        ],
        "k":[
            "10011",
            "10110",
            "11100",
            "10110",
            "10011"
        ],
        "l":[
            "10000",
            "10000",
            "10000",
            "10000",
            "11111"
        ],
        "m":[
            "10001",
            "11011",
            "10101",
            "10001",
            "10001"
        ],
        "n":[
            "10001",
            "11001",
            "10101",
            "10011",
            "10001"
        ],
        "o":[
            "11111",
            "10001",
            "10001",
            "10001",
            "11111"
        ],
        "p":[
            "11111",
            "10001",
            "11111",
            "10000",
            "10000"
        ],
        "q":[
            "11111",
            "10001",
            "11111",
            "00001",
            "00001"
        ],
        "r":[
            "11110",
            "10001",
            "11110",
            "10010",
            "10001"
        ],
        "s":[
            "11111",
            "10000",
            "11111",
            "00001",
            "11111"
        ],
        "t":[
            "11111",
            "00100",
            "00100",
            "00100",
            "00100"
        ],
        "u":[
            "10001",
            "10001",
            "10001",
            "10001",
            "11111"
        ],
        "v":[
            "10001",
            "10001",
            "01010",
            "01010",
            "00100"
        ],
        "w":[
            "10001",
            "10101",
            "10101",
            "10101",
            "01010"
        ],
        "x":[
            "10001",
            "01010",
            "00100",
            "01010",
            "10001"
        ],
        "y":[
            "10001",
            "11011",
            "01110",
            "00100",
            "00100"
        ],
        "z":[
            "11111",
            "00011",
            "01100",
            "11000",
            "11111"
        ]
    }
};

module.exports = StringMapRepository;

