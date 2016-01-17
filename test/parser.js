var assert = require("power-assert");
var Parser = require("../src/util/Parser.js");
var Repository  = require("../src/repository/StringMapRepository.js");
var repository  = new Repository(null);
var zeroOneMap  = repository.getZeroOneMap();
var stringMap   = repository.getStringMap();

describe('Parser', function() {
    describe('#parse()', function () {
        it('should return string with the length in 39', function () {
            var parser = new Parser(stringMap, zeroOneMap);
            var actual = parser.parse("a");
            assert.equal(39, actual.length);
        });
    });

});
