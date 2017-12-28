const BaseEntity = require('./BaseEntity');

module.exports = class Moon extends BaseEntity{
    constructor(){
        this.Planet = null;
        super('Temp moon');
    }
}