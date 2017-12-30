const Star = require('./../../Models/Star')
const Planet = require('./../../Models/Planet')
const PlanetGenerator = require('./../../Generators/PlanetGenerator/PlanetGenerator')
const StarSystem = require('./../../Models/StarSystem')
const RNG = require('./../../Helpers/RNG')
const ProjectCoeficient = require('./../../ProjectConstants')

var StarSystemGenerator = (function () {

    function Generate(options) {
        var prototype = new StarSystem();

        if (options != undefined &&  options['parentSystem'] != undefined)
            prototype.System = options['parentSystem'];

        prototype.Planets = GeneratePlanets(1,20)

        return prototype;
    }

    function GeneratePlanets(minPlanetCount, maxPlanetCount)
    {
        var planetArray = new Array();
        var planetCount = RNG.GetRandomIntegerFromRange(minPlanetCount, maxPlanetCount);
        for (var i=0; i<planetCount; i++)
            planetArray.push(PlanetGenerator.Generate());
        return planetArray;
    }

    return {
        Generate: Generate
    }
})();

module.exports = StarSystemGenerator;