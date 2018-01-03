//const seedrandom = require('seedrandom')
const Random = require("random-js");

var RNG = (function () {

    var _random = new Random(Random.engines.mt19937().autoSeed());

    function SetRandomGenerationSeed(seed) {
        _random = new Random(Random.engines.mt19937().seed(seed));
    }

    function GetRandomIntegerFromRange(arg1, arg2) {
        if (typeof arg1 === 'object')
            return _random.integer(arg1['max'], arg1['min']);
        else
            return _random.integer(arg1, arg2);
    }

    function GetRandomRealNumberFromRange(arg1, arg2) {
        if (typeof arg1 === 'object')
            return _random.real(arg1['max'], arg1['min'], true);
        else
            return _random.real(arg1, arg2, true);
    }

    function GenerateRandomName() {
        var generatedName = '';
        for (var i = 0; i < GetRandomIntegerFromRange(3, 10); i++) {
            var randomIntFromChar = GetRandomIntegerFromRange(65, 86);
            generatedName += String.fromCharCode(randomIntFromChar);
        }
        return generatedName;
    };

    function GetRandomObjectFromArray(objectArray) {
        if (objectArray[0]['weight'] === undefined)
            return objectArray[GetRandomIntegerFromRange(0, objectArray.length - 1)];
        else {
            var weightsArray = objectArray.map(x => x.weight);
            var objectsArray = objectArray.map(x => x.object);
            var totalWeight = weightsArray.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
            var randomNumber = GetRandomRealNumberFromRange(0, totalWeight);
            var weightSum = 0;
            for (var i = 0; i < objectArray.length; i++) {
                weightSum += weightsArray[i];
                weightSum = + weightSum.toFixed(2);
                if (randomNumber <= weightSum)
                    return objectsArray[i];
            }
        }
    }

    function ValidateDistributions(objectsWithDistributions) {
        var checkSum = 0;
        objectsWithDistribution.forEach(object => {
            checkSum += object['chance'];
        });
        return checkSum == 100;
    }

    return {
        GetRandomIntegerFromRange: GetRandomIntegerFromRange,
        GenerateRandomName: GenerateRandomName,
        SetRandomGenerationSeed: SetRandomGenerationSeed,
        GetRandomObjectFromArray: GetRandomObjectFromArray,
        GetRandomRealNumberFromRange: GetRandomRealNumberFromRange
    }

})();

module.exports = RNG;