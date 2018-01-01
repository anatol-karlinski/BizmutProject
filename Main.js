const RNG = require('./Helpers/RNG')
const PlanetGenerator = require('./Generators/PlanetGenerator/PlanetGenerator');
const StarSystemGenerator = require('./Generators/StarSystemGenerator/StarSystemGenerator');
const GalaxyGenerator = require('./Generators/GalaxyGenerator/GalaxyGenerator');
const StarSystem = require('./Models/StarSystem');
const SeedManager = require('./Helpers/SeedManager')
const GalaxyTypes = require('./Types/GalaxyTypes')
const GalaxySizeTypes = require('./Types/GalaxySizeType')

var testSeed = SeedManager.GetSeedFromGalaxyGenerationSettings({
    type: GalaxyTypes.Pinwheel,
    size: GalaxySizeTypes.Medium
});

var testOptionsFromSeed = SeedManager.GetGalaxyGenerationSettingsFromSeed(testSeed);

RNG.SetRandomGenerationSeed(testSeed);

var options = {
    maxStarCount: 2000,
    minStarCount: 1000,
    nomadPlanetCoeficient: 0.0005
};

var testEntity = GalaxyGenerator.GenerateFromPureSeed(options);
console.log(testEntity);
