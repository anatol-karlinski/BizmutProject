const PRNG = require('./Helpers/PRNG')
const RNG = require('./Helpers/RNG')
const PlanetGenerator = require('./Generators/PlanetGenerator/PlanetGenerator');
const StarSystem = require('./Models/StarSystem');

PRNG.setSeed('asasdasd');
RNG.SetRandomGenerationSeed(PRNG.nextInt());

var options = {
    parentSystem: new StarSystem(),
    maxMoonCount: 12,
    minMoonCount: 0
};

var testEntity = PlanetGenerator.Generate(options);
var x = 0;