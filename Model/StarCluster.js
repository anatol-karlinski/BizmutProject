const BaseEntity = require('./BaseEntity');
const Planet = require('./Planet');

module.exports = class StarCluster extends BaseEntity{
    constructor(){
        super('Temp star system');
        this.Planets = new Array();
        this.Stars = new Array();
    }
}