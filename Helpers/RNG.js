const seedrandom = require('seedrandom')

var RNG = (function () {

    var _randomseedObject;

    function SetRandomGenerationSeed(seed) {
        _randomseedObject = new Math.seedrandom(seed);
    }

    function GetRandomIntegerFromRange(min, max) {
        return Math.floor(_randomseedObject() * (max - min + 1)) + min;
    }

    function GenerateNameFromInteger(integer) {
        var intAsStringArray = String(integer).split('');
        var generatedName = '';
        intAsStringArray.forEach((element) => {
            var randomIntFromChar = GetRandomIntegerFromRange(65, 86);
            generatedName += String.fromCharCode(randomIntFromChar);
        });
        return generatedName;
    }

    return {
        GetRandomIntegerFromRange: GetRandomIntegerFromRange,
        GenerateNameFromInteger: GenerateNameFromInteger,
        SetRandomGenerationSeed: SetRandomGenerationSeed
    }

})();



module.exports = RNG;