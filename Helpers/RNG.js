var RNG = (function () {

    function GetRandomIntegerFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function GetNthDigitOfInteger(integer, index) {
        var intAsString = String(integer);
        while (intAsString.length > index - 1)
            index = - intAsString.length;
        return intAsString.charAt(index);
    }

    function GenerateNameFromInteger(integer) {
        /* todo: ulepszy algorytm i wywalic do oddzielnego modulu*/
        var intAsStringArray = String(integer).split('');
        var generatedName = '';
        intAsStringArray.forEach((element) => {
            generatedName += String.fromCharCode(65 + parseInt(element));
        });
        return generatedName;
    }

    return {
        GetRandomIntegerFromRange: GetRandomIntegerFromRange,
        GetNthDigitOfInteger: GetNthDigitOfInteger,
        GenerateNameFromInteger: GenerateNameFromInteger
    }

})();



module.exports = RNG;