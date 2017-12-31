const seedrandom = require('seedrandom')

var RNG = (function () {

    var _seedrandomObject;

    function SetRandomGenerationSeed(seed) {
        _seedrandomObject = new Math.seedrandom(seed);
    }

    function GetRandomIntegerFromRange(min, max) {
        return Math.floor(_seedrandomObject() * (max - min + 1)) + min;
    }

    function GenerateRandomName() {
        var generatedName = '';
        for (var i = 0; i < GetRandomIntegerFromRange(3, 10); i++) {
            var randomIntFromChar = GetRandomIntegerFromRange(65, 86);
            generatedName += String.fromCharCode(randomIntFromChar);
        }
        return generatedName;
    };


    return {
        GetRandomIntegerFromRange: GetRandomIntegerFromRange,
        GenerateRandomName: GenerateRandomName,
        SetRandomGenerationSeed: SetRandomGenerationSeed
    }

})();



module.exports = RNG;