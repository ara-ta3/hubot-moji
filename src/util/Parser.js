
var Parser = function(stringMap, zeroOneMap) {
    this.parse = function(target) {
        var parsed = "";
        try {
            parsed =  target.split("").map(function(a) {
                return stringMap[a];
            }).reduce(function(pre, cur) {
                return pre.map(function(p, i) {
                    return p + cur[i];
                });
            }).map(function(a) {
                return a.replace(/0/g,zeroOneMap["0"]).replace(/1/g,zeroOneMap["1"]);
            }).join("\n");
        } catch (e) {
            console.error(e);
            parsed = "failed to parse";
        }
        return parsed;
    };
};

module.exports = Parser;

