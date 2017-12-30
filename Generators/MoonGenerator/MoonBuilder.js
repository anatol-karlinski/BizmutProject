const Moon = require('./../../Models/Moon')
const RNG = require('./../../Helpers/RNG')
const OptionsValidatorFactory = require('../../Validators/OptionsValidator/OptionsValidatorFactory')

var MoonGenerator = (function () {

    _optionsValidator = OptionsValidatorFactory.GetValidator(EntityType.Moon);

    function Generate(seed, options) {
        _optionsValidator.ValidateOptions(options)

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