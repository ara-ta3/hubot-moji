var assert = require("power-assert");
var Parser = require("../src/util/parser.js");
var Default = require("../src/data/default.js");
var zeroOneMap  = Default.zeroOneMap;
var stringMap   = Default.stringMap;

describe('Parser', function() {
    describe('#parse()', function () {
        it('should return string with the length in 39', function () {
            var parser = new Parser(stringMap, zeroOneMap);
            var actual = parser.parse("a");
            assert.equal(39, actual.length);
        });
    });
});
