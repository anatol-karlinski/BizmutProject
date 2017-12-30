function OptionsValidator(validatorsArray) {
    var _validatorsArray = validatorsArray;

    var my = {};

    my.Validate = function (options) {
        if (options === undefined) {
            throw 'Passed options object was not defined.'
            return false;
        }
        for (var optionName in _validatorsArray) {
            if (options[optionName] === undefined) {
                throw 'Option [' + optionName + '] was not defined.'
                return false;
            }
            var validationMethod = _validatorsArray[optionName];
            if (!validationMethod(options[optionName])) {
                throw 'Option [' + optionName + '] failed validation'
                return false;
            }
        }
        return true;
    }

    return my;
};

module.exports = OptionsValidator;