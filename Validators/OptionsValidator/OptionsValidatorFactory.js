const EntityType = require('./../../Types/EntityType')
const OptionsValidator = require('./OptionsValidator')
const OptionsValidatorRepository = require('./OptionsValidatiorsRepository')

var OptionsValidatorFactory = (function () {

    function GetValidator(entityType) {
        switch (entityType) {
            case EntityType.Moon:
                return new OptionsValidator(OptionsValidatorRepository.MoonOptionsValidators);
            case EntityType.Planet:
                return new OptionsValidator(OptionsValidatorRepository.PlanetOptionsValidators);
            case EntityType.Star:
                return new OptionsValidator(OptionsValidatorRepository.StarOptionsValidators);
            case EntityType.StarSystem:
                return new OptionsValidator(OptionsValidatorRepository.StarSystemValidators);
            case EntityType.Galaxy:
                return new OptionsValidator(OptionsValidatorRepository.GalaxyValidators);
            default:
                return new OptionsValidator(OptionsValidatorRepository.MoonOptionsValidators);
        }
    }

    return {
        GetValidator: GetValidator
    }

})();

module.exports = OptionsValidatorFactory;