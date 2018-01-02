const BaseEntity = require('./BaseEntity');
const Planet = require('./Planet');

module.exports = class StarSystem extends BaseEntity {
    constructor() {
        super('TEMP STAR SYSTEM');
        this.Type = null;
        this.Planets = new Array();
        this.Stars = new Array();
    }
}