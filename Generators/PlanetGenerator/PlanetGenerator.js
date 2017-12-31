const Planet = require('./../../Models/Planet')
const Moon = require('./../../Models/Moon')
const MoonGenerator = require('./../MoonGenerator/MoonGenerator')
const ProjectCoeficient = require('./../../ProjectConstants')
const RNG = require('./../../Helpers/RNG')
const OptionsValidatorFactory = require('../../Validators/OptionsValidator/OptionsValidatorFactory')
const EntityType = require('./../../Types/EntityType')

var PlanetGenerator = (function () {

    var _optionsValidator = OptionsValidatorFactory.GetValidator(EntityType.Planet);

    function Generate(options) {
        _optionsValidator.Validate(options);
        var prototypePlanet = new Planet();
        var moonCount = RNG.GetRandomIntegerFromRange(options['minMoonCount'], options['maxMoonCount']);
        prototypePlanet.Name = RNG.GenerateRandomName();
        prototypePlanet.System = options['parentSystem'];
        prototypePlanet.Moons = CreateMoons(moonCount, prototypePlanet);
        return prototypePlanet;
    }

    function CreateMoons(moonCount, parentPlanet) {
        var moonArray = new Array();
        for (var i = 0; i < moonCount; i++)
            moonArray.push(MoonGenerator.Generate({
                parentPlanet: parentPlanet
            }));
        return moonArray;
    }

    return {
        Generate: Generate
    }
})();

module.exports = PlanetGenerator;