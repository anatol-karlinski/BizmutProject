const EntityType = require('./../../Types/EntityType')
const OptionsValidator = require('./OptionsValidator')
const OptionsValidatorRepository = require('./OptionsValidatiorsRepository')

var OptionsValidatorFactory = (function() {

    function GetValidator(entityType){
        switch(entityType) {
            case EntityType.Moon:
                return new OptionsValidator(OptionsValidatorRepository.MoonOptionsValidators);
        }
    }

    return {
        GetValidator: GetValidator
    }

})();

module.exports = OptionsValidatorFactory;