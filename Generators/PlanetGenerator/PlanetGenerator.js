const Planet = require('./../../Models/Planet')
const Moon = require('./../../Models/Moon')
const MoonGenerator = require('./../MoonGenerator/MoonGenerator')
const ProjectCoeficient = require('./../../ProjectConstants')
const RNG = require('./../../Helpers/RNG')
const PRNG = require('./../../Helpers/PRNG')
const OptionsValidatorFactory = require('../../Validators/OptionsValidator/OptionsValidatorFactory')
const EntityType = require('./../../Types/EntityType')

var PlanetGenerator = (function () {

    var _optionsValidator = OptionsValidatorFactory.GetValidator(EntityType.Planet);

    function Generate(options) {
        _optionsValidator.Validate(options);
        var seed = PRNG.nextInt();
        var prototype = new Planet();
        var moonCount = RNG.GetRandomIntegerFromRange(options['minMoonCount'], options['maxMoonCount']);
        prototype.Name = RNG.GenerateNameFromInteger(seed);
        prototype.System = options['parentSystem'];
        prototype.Moons = CreateMoons(moonCount, prototype);
        return prototype;
    }

    function CreateMoons(maxMoonCount, currentPlanet) {
        var moonCount = 0;
        var moonArray = new Array();
        for (var i = 0; i < maxMoonCount; i++)
            moonArray.push(MoonGenerator.Generate({
                parentPlanet: currentPlanet
            }));
        return moonArray;
    }

    return {
        Generate: Generate
    }
})();

module.exports = PlanetGenerator;