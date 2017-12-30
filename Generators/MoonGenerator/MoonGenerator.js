const Moon = require('./../../Models/Moon')
const RNG = require('./../../Helpers/RNG')
const PRNG = require('./../../Helpers/PRNG')
const OptionsValidatorFactory = require('../../Validators/OptionsValidator/OptionsValidatorFactory')
const EntityType = require('./../../Types/EntityType')

var MoonGenerator = (function () {

    var _optionsValidator = OptionsValidatorFactory.GetValidator(EntityType.Moon);

    function Generate(options) {
        var seed = PRNG.nextInt();
        _optionsValidator.Validate(options);
        var prototype = new Moon();
        prototype.ParentPlanet = options['parentPlanet'];
        prototype.Name = RNG.GenerateNameFromInteger(seed);
        return prototype;
    }

    return {
        Generate: Generate
    }

})();

module.exports = MoonGenerator;