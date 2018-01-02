const BaseEntity = require('./BaseEntity');
const Planet = require('./Planet');

module.exports = class StarCluster extends BaseEntity {
    constructor() {
        super('TEMP STAR CLUSTER');
        this.StarSystems = new Array();
        this.Stars = new Array();
    }
}