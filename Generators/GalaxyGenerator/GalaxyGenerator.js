const Galaxy = require('../../Models/Galaxy')
const RNG = require('./../../Helpers/RNG')
const ProjectCoeficient = require('./../../ProjectConstants')
const EntityType = require('./../../Types/EntityType')
const OptionsValidatorFactory = require('../../Validators/OptionsValidator/OptionsValidatorFactory')
const PlanetGenerator = require('./../../Generators/PlanetGenerator/PlanetGenerator')
const StarSystemGenerator = require('./../../Generators/StarSystemGenerator/StarSystemGenerator')
const GalaxySizeType = require('./../../Types/GalaxySizeType')

var GalaxyGenerator = (function () {

    var _optionsValidator = OptionsValidatorFactory.GetValidator(EntityType.Galaxy);

    function Generate(seed) {
        var seedIsPreGenerated = seed.match('^[0-9A-Z]{3}-');
        if (seedIsPreGenerated)
            GenerateFroPreGeneratedSeed(seed);
        else
            GenerateFromPureSeed(options);
    }

    function GenerateFroPreGeneratedSeed(seed) {

    }

    function DecodeOptionsFromSeed(seed) {
        var galaxySize = (function (subSeed) {
            var subseedTrueValue = HexToDec(subSeed);
            if (subseedTrueValue < 800)
                return GalaxySizeType.Tiny;
            else if (subseedTrueValue < 1600)
                return GalaxySizeType.Small;
            else if (subseedTrueValue < 2400)
                return GalaxySizeType.Medium;
            else if (subseedTrueValue < 3200)
                return GalaxySizeType.Large;
            else
                return GalaxySizeType.Huge;
        })(seed.substr(0, 3));

    }

    function HexToDec(hexValue) {
        return parseInt(hexValue.toString(16));
    }

    function GenerateFromPureSeed(options) {
        var galaxyPrototype = new Galaxy();
        var starCount = RNG.GetRandomIntegerFromRange(options['minStarCount'], options['maxStarCount']);
        var nomadPlanetsCount = starCount * options['nomadPlanetCoeficient'];

        galaxyPrototype.StarSystems = GenerateStarSystems(starCount);
        galaxyPrototype.NomadPlanets = GenerateNomadPlanets(nomadPlanetsCount);
        galaxyPrototype.Name = RNG.GenerateRandomName();

        return galaxyPrototype;
    }

    function GenerateStarSystems(count) {
        var starSystems = new Array();
        for (var i = 0; i < count; i++) {
            starSystems.push(StarSystemGenerator.Generate({
                maxPlanetCount: 15,
                minPlanetCount: 1,
                multipleStarsChance: 0.0001,
                maxStarCount: 2
            }));
        };
        return starSystems;
    }

    function GenerateNomadPlanets(count) {
        var nomadPlanetsArray = new Array();
        for (var i = 0; i < count; i++) {
            nomadPlanetsArray.push(PlanetGenerator.Generate({
                maxMoonCount: 0,
                minMoonCount: 0,
                parentSystem: null
            }));
        };
        return nomadPlanetsArray;
    }

    function GenerateFromPremadeSeed() {

    }

    return {
        Generate: Generate,
        GenerateFromPureSeed: GenerateFromPureSeed
    }

})();

module.exports = GalaxyGenerator;