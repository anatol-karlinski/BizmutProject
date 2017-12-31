function OptionsValidator(validatorsArray) {
    
    var _validatorsArray = validatorsArray;

    var my = {};

    my.Validate = function (optionsObject) {
        if (optionsObject === undefined) {
            throw 'Passed optionsObject object was not defined.'
            return false;
        }
        for (var optionName in _validatorsArray) {
            if (optionsObject[optionName] === undefined) {
                throw 'Option [' + optionName + '] was not defined.'
                return false;
            }
            var validationMethod = _validatorsArray[optionName];
            if (!validationMethod(optionsObject)) {
                throw 'Option [' + optionName + '] failed validation'
                return false;
            }
        }
        return true;
    }

    return my;
};

module.exports = OptionsValidator;