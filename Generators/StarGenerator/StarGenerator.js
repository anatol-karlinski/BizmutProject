const Star = require('./../../Models/Star')
const RNG = require('./../../Helpers/RNG')
const ProjectCoeficient = require('./../../ProjectConstants')

var StarGenerator = (function () {

    function Generate(options) {
        var prototype = new Star();

        if (options['parentSystem'] != null)
            prototype.System = options['parentSystem'];

        return prototype;
    }

    return {
        Generate: Generate
    }
})();

module.exports = StarGenerator;