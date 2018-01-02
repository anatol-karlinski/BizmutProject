const BaseEntity = require('./BaseEntity');

module.exports = class Moon extends BaseEntity {
    constructor() {
        super('TEMP MOON');
        this.ParentPlanet = null;
    }
}