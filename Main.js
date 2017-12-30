const PRNG = require('./Helpers/PRNG')
PRNG.setSeed(123456);

const PlanetGenerator = require('./Generators/PlanetGenerator/PlanetGenerator');
const StarSystem = require('./Models/StarSystem');

var options = {
    parentSystem: new StarSystem(),
    maxMoonCount: 12
};

var testEntity = PlanetGenerator.Generate(PRNG.nextInt(), options);