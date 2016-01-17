
var Parser = function(stringMap, zeroOneMap) {
    this.parse = function(target) {
        return target.split("").map(function(a) {
            return stringMap[a].replace(/0/g,zeroOneMap["0"]).replace(/1/g,zeroOneMap["1"]).split("\n");
        }).reduce(function(pre, cur) {
            return pre.map(function(p, i) {
                return p + cur[i];
            });
        }).join("\n");
    };
};

module.exports = Parser;

