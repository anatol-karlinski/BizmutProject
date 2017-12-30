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
        var seed = PRNG.nextInt();
        _optionsValidator.Validate(options);     
        var prototype = new Planet();
        var moonCount = seed % options['maxMoonCount'];
        prototype.Name = RNG.GenerateNameFromInteger(seed);
        prototype.System = options['parentSystem'];
        prototype.Moons = CreateMoons(moonCount);
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