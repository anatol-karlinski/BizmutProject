const Star = require('./../../Models/Star')
const PlanetGenerator = require('./../../Generators/PlanetGenerator/PlanetGenerator')
const StarGenerator = require('./../../Generators/StarGenerator/StarGenerator')
const StarSystem = require('./../../Models/StarSystem')
const RNG = require('./../../Helpers/RNG')
const EntityType = require('./../../Types/EntityType')
const OptionsValidatorFactory = require('../../Validators/OptionsValidator/OptionsValidatorFactory')

var StarSystemGenerator = (function () {

    var _optionsValidator = OptionsValidatorFactory.GetValidator(EntityType.StarSystem);

    function Generate(options) {
        _optionsValidator.Validate(options);
        var prototypeSystem = new StarSystem();
        prototypeSystem.Planets = GeneratePlanets(options['minPlanetCount'], options['maxPlanetCount'], prototypeSystem);
        prototypeSystem.Stars = GenerateStars(options['multipleStarsChance'], options['maxStarCount'], prototypeSystem);
        prototypeSystem.Name = RNG.GenerateRandomName();
        return prototypeSystem;
    }

    function GeneratePlanets(minPlanetCount, maxPlanetCount, parentSystem) {
        var planetArray = new Array();
        var planetCount = RNG.GetRandomIntegerFromRange(minPlanetCount, maxPlanetCount);
        for (var i = 0; i < planetCount; i++)
            planetArray.push(PlanetGenerator.Generate({
                minMoonCount: 0,
                maxMoonCount: 7,
                parentSystem: parentSystem
            }));
        return planetArray;
    }

    function GenerateStars(multipleStarsChance, maxStarCount, parentSystem) {
        var starsArray = new Array();
        var multipleStars = (Math.random() < multipleStarsChance * 0.001); // DO ZMIANY!!!!
        var starCount = 0;
        if (multipleStars)
            starCount = RNG.GetRandomIntegerFromRange(1, maxStarCount);
        else
            starCount = 1;
        for (var i = 0; i < starCount; i++)
        starsArray.push(StarGenerator.Generate({
            parentSystem: parentSystem
        }));
        return starsArray;
    }

    return {
        Generate: Generate
    }
})();

module.exports = StarSystemGenerator;