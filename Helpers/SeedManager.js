const RNG = require('./RNG')
const GalaxySizeType = require('./../Types/GalaxySizeType')
const sprintf = require('sprintf')

var SeedManager = (function () {

    function GetSeedFromGalaxyGenerationSettings(settings) {
        return sprintf('%s-%s-%s-%s',
            GenerateSubseedFromType(settings['size']),
            GenerateSubseedFromType(settings['type']),
            RNG.GetRandomIntegerFromRange(1000, 9999).toString(16),
            RNG.GetRandomIntegerFromRange(1000, 9999).toString(16)
        );
    }

    function GetGalaxyGenerationSettingsFromSeed(seed) {
        var encodedSettings = seed.match(/[0-9A-Za-z]+/g);
        return {
            size: GetTypeFromSubseed(encodedSettings[0]),
            type: GetTypeFromSubseed(encodedSettings[1])
        }
    }

    function GetTypeFromSubseed(subseed) {
        return Math.floor((parseInt(subseed, 16) / 1000) + 1);
    }

    function GenerateSubseedFromType(type) {
        return RNG.GetRandomIntegerFromRange(((type - 1) * 1000) + 1, type * 1000).toString(16);
    }

    return {
        GetSeedFromGalaxyGenerationSettings: GetSeedFromGalaxyGenerationSettings,
        GetGalaxyGenerationSettingsFromSeed: GetGalaxyGenerationSettingsFromSeed
    }

})();

module.exports = SeedManager;