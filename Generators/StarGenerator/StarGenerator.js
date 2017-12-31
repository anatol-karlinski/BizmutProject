const Star = require('./../../Models/Star')
const RNG = require('./../../Helpers/RNG')
const PRNG = require('./../../Helpers/PRNG')
const ProjectCoeficient = require('./../../ProjectConstants')
const OptionsValidatorFactory = require('../../Validators/OptionsValidator/OptionsValidatorFactory')
const EntityType = require('./../../Types/EntityType')

var StarGenerator = (function () {

    var _optionsValidator = OptionsValidatorFactory.GetValidator(EntityType.Star);

    function Generate(options) {
        _optionsValidator.Validate(options);
        var seed = PRNG.nextInt();
        var prototype = new Star();
        prototype.System = options['parentSystem'];
        return prototype;
    }

    return {
        Generate: Generate
    }
})();

module.exports = StarGenerator;