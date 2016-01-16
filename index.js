Fs   = require 'fs'
Path = require 'path'

module.exports = function(robot) {
  var path = Path.resolve(__dirname, 'src/scripts');
    Fs.exists(path, function(exists) {
        if (exists) {
            for (var file in Fs.readdirSync(path)) {
                robot.loadFile(path, file);
            }
        }
    }
}
