const PRNG = require('./Helpers/PRNG')
const RNG = require('./Helpers/RNG')
const PlanetGenerator = require('./Generators/PlanetGenerator/PlanetGenerator');
const StarSystemGenerator = require('./Generators/StarSystemGenerator/StarSystemGenerator');
const StarSystem = require('./Models/StarSystem');

PRNG.setSeed('e774dfc6-401f-455a-93bc-8a21dcc1e2c0');
RNG.SetRandomGenerationSeed(PRNG.nextInt());

var options = {
    maxPlanetCount: 10,
    minPlanetCount: 2,
    multipleStarsChance: 0.001,
    maxStarCount: 2
};

var testEntity = StarSystemGenerator.Generate(options);
console.log(testEntity);
