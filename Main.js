const PRNG = require('./Helpers/PRNG')
PRNG.setSeed(123123);

const PlanetGenerator = require('./Generators/PlanetGenerator/PlanetGenerator');
const StarSystem = require('./Models/StarSystem');

var options = {
    parentSystem: new StarSystem(),
    maxMoonCount: 12
};

var testEntity = PlanetGenerator.Generate(options);
var x =0;