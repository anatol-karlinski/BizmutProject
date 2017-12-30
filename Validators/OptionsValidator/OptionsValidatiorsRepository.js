const ProjectConstants = require('./../../ProjectConstants')

var OptionValidators = {
    MoonOptionsValidators: {
        parentPlanet: (optionValue) => (typeof optionValue === 'object')
    },
    PlanetOptionsValidators: {
        maxMoonCount: (optionValue) => (optionValue <=  ProjectConstants.DEFAULT_MAX_MOON_COUNT_PER_PLANET && optionValue >= 0),
        parentSystem: (optionValue) => (typeof optionValue === 'object')
    }
};

module.exports = OptionValidators;