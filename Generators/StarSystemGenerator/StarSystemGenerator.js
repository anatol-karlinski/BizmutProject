const Star = require('./../../Models/Star')
const Planet = require('./../../Models/Planet')
const PlanetGenerator = require('./../../Generators/PlanetGenerator/PlanetGenerator')
const StarSystem = require('./../../Models/StarSystem')
const RNG = require('./../../Helpers/RNG')
const PRNG = require('./../../Helpers/PRNG')
const ProjectCoeficient = require('./../../ProjectConstants')

var StarSystemGenerator = (function () {

    function Generate(options) {
        _optionsValidator.Validate(options);
        var seed = PRNG.nextInt();
        var prototype = new StarSystem();
        prototype.Planets = GeneratePlanets(options['minPlanetCount'], options['maxPlanetCount'])
        return prototype;
    }

    function GeneratePlanets(minPlanetCount, maxPlanetCount, seed) {
        var planetArray = new Array();
        var planetCount = RNG.GetRandomIntegerFromRange(minPlanetCount, maxPlanetCount);
        for (var i = 0; i < planetCount; i++)
            planetArray.push(PlanetGenerator.Generate({
                minMoonCount: 0,
                maxMoonCount: 23
            }));
        return planetArray;
    }

    return {
        Generate: Generate
    }
})();

module.exports = StarSystemGenerator;