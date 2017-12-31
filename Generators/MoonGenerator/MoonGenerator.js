const Moon = require('./../../Models/Moon')
const RNG = require('./../../Helpers/RNG')
const OptionsValidatorFactory = require('../../Validators/OptionsValidator/OptionsValidatorFactory')
const EntityType = require('./../../Types/EntityType')

var MoonGenerator = (function () {

    var _optionsValidator = OptionsValidatorFactory.GetValidator(EntityType.Moon);

    function Generate(options) {
        _optionsValidator.Validate(options);
        var prototypeMoon = new Moon();
        prototypeMoon.ParentPlanet = options['parentPlanet'];
        prototypeMoon.Name = RNG.GenerateRandomName();
        return prototypeMoon;
    }

    return {
        Generate: Generate
    }

})();

module.exports = MoonGenerator;