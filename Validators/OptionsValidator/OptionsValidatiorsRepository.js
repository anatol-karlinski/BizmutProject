const ProjectConstants = require('./../../ProjectConstants')

var OptionValidators = {

    MoonOptionsValidators: {
        parentPlanet: (optionsObject) => (typeof optionsObject['parentPlanet'] === 'object')
    },

    StarOptionsValidators: {
        parentSystem: (optionsObject) => (typeof optionsObject['parentSystem'] === 'object')
    },

    PlanetOptionsValidators: {
        maxMoonCount: (optionsObject) =>
            (optionsObject['maxMoonCount'] <= ProjectConstants.DEFAULT_MAX_MOON_COUNT_PER_PLANET &&
                optionsObject['maxMoonCount'] >= optionsObject['minMoonCount'] &&
                optionsObject['maxMoonCount'] >= 0),
        minMoonCount: (optionsObject) =>
            (optionsObject['minMoonCount'] >= ProjectConstants.DEFAULT_MIN_MOON_COUNT_PER_PLANET &&
                optionsObject['minMoonCount'] <= optionsObject['maxMoonCount'] &&
                optionsObject['minMoonCount'] >= 0),
        parentSystem: (optionsObject) => (typeof optionsObject['parentSystem'] === 'object')
    },

    StarSystemValidators: {
        maxPlanetCount: (optionsObject) =>
            (optionsObject['maxPlanetCount'] <= ProjectConstants.DEFAULT_MAX_PLANET_COUNT_PER_SYSTEM &&
                optionsObject['maxPlanetCount'] >= 0 &&
                optionsObject['maxPlanetCount'] >= optionsObject['minPlanetCount']),
        minPlanetCount: (optionsObject) =>
            (optionsObject['minPlanetCount'] >= ProjectConstants.DEFAULT_MIN_PLANET_COUNT_PER_SYSTEM &&
                optionsObject['minPlanetCount'] >= 0 &&
                optionsObject['minPlanetCount'] <= optionsObject['minPlanetCount']),
        multipleStarsChance: (optionsObject) =>
            (optionsObject['multipleStarsChance'] >= 0 &&
                optionsObject['multipleStarsChance'] <= 1.0),
        maxStarCount: (optionsObject) =>
            (optionsObject['maxStarCount'] >= 0 &&
                optionsObject['maxStarCount'] <= ProjectConstants.DEFAULT_MAX_STAR_COUNT_PER_SYSTEM),
    },

    GalaxyValidators: {
        maxStarCount: (optionsObject) =>
            (optionsObject['maxStarCount'] <= ProjectConstants.DEFAULT_MAX_STAR_COUNT_PER_GALAXY &&
                optionsObject['maxStarCount'] >= 0 &&
                optionsObject['maxStarCount'] >= optionsObject['minStarCount']),
        minStarCount: (optionsObject) =>
            (optionsObject['minStarCount'] >= ProjectConstants.DEFAULT_MIN_STAR_COUNT_PER_GALAXY &&
                optionsObject['minStarCount'] >= 0 &&
                optionsObject['minStarCount'] <= optionsObject['maxStarCount']),
        nomadPlanetCoeficient: (optionsObject) =>
            (optionsObject['nomadPlanetCoeficient'] <= 1 &&
                optionsObject['nomadPlanetCoeficient'] >= 0)
    }
};

module.exports = OptionValidators;