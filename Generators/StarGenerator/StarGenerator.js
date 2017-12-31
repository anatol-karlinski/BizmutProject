const Star = require('./../../Models/Star')
const RNG = require('./../../Helpers/RNG')
const ProjectCoeficient = require('./../../ProjectConstants')
const OptionsValidatorFactory = require('../../Validators/OptionsValidator/OptionsValidatorFactory')
const EntityType = require('./../../Types/EntityType')

var StarGenerator = (function () {

    var _optionsValidator = OptionsValidatorFactory.GetValidator(EntityType.Star);

    function Generate(options) {
        _optionsValidator.Validate(options);
        var prototypeStar = new Star();
        prototypeStar.System = options['parentSystem'];
        prototypeStar.Name = RNG.GenerateRandomName();
        return prototypeStar;
    }

    return {
        Generate: Generate
    }
})();

module.exports = StarGenerator;