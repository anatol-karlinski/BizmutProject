var RulesetsManager = (function () {

    const StarSystemGenerationRulset = {
        MoonCountRangeForPlanet: (system, planet) => {

        }
    }

    const PlanetGenerationRulset = {
        PlanetaryRingOccurenceChance: (planet) => ()
    }

    const MoonGenerationRuleset = {
        MoonRadiusSizeRange: (parentPlanet) => ({
            min: parentPlanet.Radius * 0.05,
            max: parentPlanet.Radius * 0.3
        }),
        MoonMassRange: (moon) => ({
            min: moon.Radius * 0.6,
            max: moon.Radius * 0.4
        }),
        MoonRingOccurenceChance: () => (0.000001)

    }
})();

module.exports = RulesetsManager;