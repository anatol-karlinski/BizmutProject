const ProjectConstants = require('./../../ProjectConstants')

var OptionValidators = {
    MoonOptionsValidators: {
        parentPlanet: (optionValue) => (typeof optionValue === Planet)
    },
    PlanetOptionsValidators: {
        maxMoonCount: (optionValue) => (optionValue <=  ProjectConstants.DEFAULT_MAX_MOON_COUNT_PER_PLANET && optionValue >= 0),
        parentSystem: (optionValue) => (typeof optionValue === System)
    }
};

module.exports = OptionValidators;