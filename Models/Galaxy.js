const BaseEntity = require('./BaseEntity');
const StarSystem = require('./StarSystem')
const StarCluster = require('./StarCluster')

module.exports = class Galaxy extends BaseEntity {
    constructor() {
        super('Temp galaxy');
        this.Type = null;
        this.NomadPlanets = new Array();
        this.StarSystems = new Array();
    }
}