const Galaxy = require('../../Models/Galaxy')
const RNG = require('./../../Helpers/RNG')
const ProjectCoeficient = require('./../../ProjectConstants')

const MIN_STAR_COUNT = 200;
const MAX_STAR_COUNT = 1000;

const DEFAULT_NOMAD_PLANET_COEFICIENT = 0.1;

const DEFAULT_STAR_CLUSTER_COEFICIENT = 0.3;

const DEFAULT_MAX_MOON_COUNT_PER_PLANET = 9;

var GalaxyGenerator = (function () {

    var _starCount = 0;
    var _planetCount = 0;
    var _nomadPlanetCoeficient = 0;
    var _maxMoonCountPerPlanet = 0;
    var _starClusterCoeficient = 0;
    var _prototype = new Galaxy();

    function Generate(options) {
        ApplyOptions(options);

        _prototype = new Galaxy();

    }

    function ApplyOptions(options) {
        if (options['starCount'] == null)
            _starCount = RNG.GetRandomIntegerFromRange(MIN_STAR_COUNT, MAX_STAR_COUNT);
        else if (options['starCount'] < MIN_STAR_COUNT)
            _starCount = MIN_STAR_COUNT;
        else if (options['starCount'] > MAX_STAR_COUNT)
            _starCount = MAX_STAR_COUNT;
        else
            _starCount = options['starCount'];

        if (options['nomadPlanetCoeficient'] == null || options['nomadPlanetCoeficient'] > 1 || options['nomadPlanetCoeficient'] < 0)
            _nomadPlanetCoeficient = DEFAULT_NOMAD_PLANET_COEFICIENT;
        else
            _nomadPlanetCoeficient = options['nomadPlanetCoeficient'];

        if (options['maxMoonCountPerPlanet'] == null || options['maxMoonCountPerPlanet'] < 0)
            _maxMoonCountPerPlanet = DEFAULT_MAX_MOON_COUNT_PER_PLANET;
        else
            _maxMoonCountPerPlanet = options['maxMoonCountPerPlanet'];

        if (options['starClusterCoeficient'] == null || options['starClusterCoeficient'] > 1 || options['starClusterCoeficient'] < 0)
            _starClusterCoeficient = DEFAULT_STAR_CLUSTER_COEFICIENT;
        else
            _starClusterCoeficient = options['starClusterCoeficient'];

    }

    return {
        Generate: Generate
    }

})();

module.exports = GalaxyGenerator;