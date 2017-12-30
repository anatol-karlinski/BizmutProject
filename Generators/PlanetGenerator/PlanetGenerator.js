const Planet = require('./../../Models/Planet')
const Moon = require('./../../Models/Moon')
const MoonGenerator = require('./../MoonGenerator/MoonGenerator')
const ProjectCoeficient = require('./../../ProjectConstants')
const RNG = require('./../../Helpers/RNG')

var PlanetGenerator = (function () {

    var _prototype = new Planet();

    function Generate(options) {
        var prototype = new Planet();

        if (options != undefined && options['maxMoonCount'] != undefined)
            prototype.Moons = CreateMoons(options['maxMoonCount']);
        else
            prototype.Moons = CreateMoons();

        if (options != undefined && options['parentSystem'] != null)
            prototype.System = options['parentSystem'];

        return prototype;
    }

    function CreateMoons(maxMoonCount) {
        var moonCount = 0;
        var moonArray = new Array();

        if ( maxMoonCount == undefined || maxMoonCount < 0)
            moonCount = RNG.GetRandomIntegerFromRange(0, ProjectCoeficient.DEFAULT_MAX_MOON_COUNT_PER_PLANET);
        else
            moonCount = RNG.GetRandomIntegerFromRange(0, maxMoonCount);

        for (var i = 0; i < moonCount; i++)
            moonArray.push(MoonGenerator.Generate());

        return moonArray;
    }

    return {
        Generate: Generate
    }
})();

module.exports = PlanetGenerator;