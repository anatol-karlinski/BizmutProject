const BaseEntity = require('./BaseEntity');
const Planet = require('./Planet');

module.exports = class StarSystem extends BaseEntity{
    constructor(){
        super('Temp star system');
        this.Type = null;
        this.Planets = new Array();
        this.Stars = new Array();
    }
}