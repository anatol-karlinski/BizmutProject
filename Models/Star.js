var BaseEntity = require('./BaseEntity');

module.exports = class Star extends BaseEntity {
    constructor(){
        super('TEMP STAR');
        this.Type = null;
        this.System = null;
    }
}
