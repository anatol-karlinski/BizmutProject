const BaseEntity = require('./BaseEntity');
const Moon = require('./Moon');

module.exports = class Planet extends BaseEntity{
    constructor(){
        super('Temp planet');
        this.Moons = new Array();
    }
}