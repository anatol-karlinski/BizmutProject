const RNG = require('./Helpers/RNG')
const PlanetGenerator = require('./Generators/PlanetGenerator/PlanetGenerator');
const StarSystemGenerator = require('./Generators/StarSystemGenerator/StarSystemGenerator');
const GalaxyGenerator = require('./Generators/GalaxyGenerator/GalaxyGenerator');
const StarSystem = require('./Models/StarSystem');
const SeedManager = require('./Helpers/SeedManager')
const GalaxyTypes = require('./Types/GalaxyTypes')
const GalaxySizeTypes = require('./Types/GalaxySizeType')
const ProjectConstants = require('./ProjectConstants')

function GetStarCountRange(galaxySize) {
    switch (galaxySize) {
        case GalaxySizeTypes.Tiny:
            return { min: 500, max: 1000 };
        case GalaxySizeTypes.Small:
            return { min: 1000, max: 2000 };
        case GalaxySizeTypes.Medium:
            return { min: 2000, max: 5000 };
        case GalaxySizeTypes.Large:
            return { min: 5000, max: 10000 };
        case GalaxySizeTypes.Huge:
            return { min: 10000, max: 50000 };
        case GalaxySizeTypes.BenSwole:
            /* Mad galactic gainz */
            return { min: 1000000000, max: 1000000000 };
    }
}

function CreateGalaxyFromSettings(settings) {
    var seed = SeedManager.GetSeedFromGalaxyGenerationSettings(settings);
    RNG.SetRandomGenerationSeed(seed);
    var starCountRange = GetStarCountRange(settings['size']);
    var testGalaxy = GalaxyGenerator.Generate({
        minStarCount: starCountRange.min,
        maxStarCount: starCountRange.max,
        nomadPlanetCoeficient: ProjectConstants.DEFAULT_NOMAD_PLANET_COEFICIENT
    });
    return seed;
}

function CreateGalaxyFromSeed(seed) {
    RNG.SetRandomGenerationSeed(seed);
    var settings, starCountRange, galaxySize;
    if (SeedManager.SeedWasPreGenerated(seed)) {
        settings = SeedManager.GetGalaxyGenerationSettingsFromSeed(seed);
        galaxySize = settings['size'];
    } else {
        galaxySize = RNG.GetRandomIntegerFromRange(1, Object.keys(GalaxySizeTypes).length / 2);
    }
    starCountRange = GetStarCountRange(galaxySize);
    var testGalaxy = GalaxyGenerator.Generate({
        minStarCount: starCountRange.min,
        maxStarCount: starCountRange.max,
        nomadPlanetCoeficient: ProjectConstants.DEFAULT_NOMAD_PLANET_COEFICIENT
    });
    return seed;

}

var seed = CreateGalaxyFromSettings({
    type: GalaxyTypes.Pinwheel,
    size: GalaxySizeTypes.Medium
});

CreateGalaxyFromSeed(seed);